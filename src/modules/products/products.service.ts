import { Injectable } from "@nestjs/common";
import { RemoveProductDto } from "./dto/remove-roduct.input";
import { CreateProductDto, ProductColors, ProductImages } from "./dto/create-product.dto";
import { FindByCategoryDto } from "./dto/find-by-category.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Colors, Product } from "@prisma/client";
import { FindOneProductDto } from "./dto/find-product.input";
import { instanceOf } from "graphql/jsutils/instanceOf";
import { UpdateProductDto } from "./dto/update-product.input";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const product: Product = await this.prisma.product.create({
            data: {
                title: createProductDto.title,
                rating: createProductDto.rating,
                price: createProductDto.price,
                dimensions: createProductDto.dimensions,
                description: createProductDto.description,
                discount: createProductDto.discount,
                expireDiscount: createProductDto.expireDiscount,
                newArrival: createProductDto.newArrival,
                categoryId: createProductDto.category,
                brand: createProductDto.brand
            }
        });
        createProductDto.images.map(async (image: string): Promise<void> => {
            await this.prisma.productImages.create({
                data: {
                    link: image,
                    productId: product.id
                }
            });
        });
        createProductDto.colors.map(async (productColor: ProductColors): Promise<void> => {
            const existColorInDb: Colors = await this.prisma.colors.findFirst({
                where: { color: productColor.color }
            });
            if (!existColorInDb) {
                const newColor: Colors = await this.prisma.colors.create({
                    data: {
                        value: productColor.value,
                        label: productColor.label,
                        color: productColor.color,
                        productId: product.id
                    }
                });
                await this.prisma.productColors.create({
                    data: {
                        productId: product.id,
                        colorsId: newColor.id
                    }
                });
            } else {
                await this.prisma.productColors.create({
                    data: {
                        productId: product.id,
                        colorsId: existColorInDb.id
                    }
                });
            }
        });
        return product;
    }

    findAll(): Promise<Product[]> {
        return this.prisma.product.findMany({
            include: {
                category: true,
                images: true,
                productColors: {
                    include: {
                        color: true
                    }
                }
            }
        });
    }

    findByCategory(findByCategoryDto: FindByCategoryDto): Promise<Product[]> {
        return this.prisma.product.findMany({ where: { categoryId: findByCategoryDto.category } });
    }

    findOne(findOneProductDto: FindOneProductDto): Promise<Product> {
        return this.prisma.product.findFirst({ where: { id: findOneProductDto.id } });
    }

    update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        return this.prisma.product.update({
            where: { id },
            data: {
                title: updateProductDto.title,
                rating: updateProductDto.rating,
                price: updateProductDto.price,
                dimensions: updateProductDto.dimensions,
                description: updateProductDto.description,
                discount: updateProductDto.discount,
                expireDiscount: updateProductDto.expireDiscount,
                newArrival: updateProductDto.newArrival,
                categoryId: updateProductDto.category,
                brand: updateProductDto.brand
            }
        });
    }

    remove(removeProductDto: RemoveProductDto): Promise<Product> {
        return this.prisma.product.delete({ where: { id: removeProductDto.id } });
    }
}
