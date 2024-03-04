import { Injectable } from "@nestjs/common";
import { RemoveProductDto } from "./dto/remove-roduct.input";
import { CreateProductDto } from "./dto/create-product.dto";
import { FindByCategoryDto } from "./dto/find-by-category.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Product } from "@prisma/client";
import { FindOneProductDto } from "./dto/find-product.input";

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    create(createProductDto: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({
            data: createProductDto
        });
    }

    findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    findByCategory(findByCategoryDto: FindByCategoryDto): Promise<Product[]> {
        return this.prisma.product.findMany({ where: { category: findByCategoryDto.category } });
    }

    findOne(findOneProductDto: FindOneProductDto): Promise<Product> {
        return this.prisma.product.findFirst({ where: { id: findOneProductDto.id } });
    }

    //
    // update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
    //     return this.prisma.product.update({
    //         where: { id },
    //         data: {
    //             category: updateProductInput
    //         }
    //     });
    // }

    remove(removeProductDto: RemoveProductDto): Promise<Product> {
        return this.prisma.product.delete({ where: { id: removeProductDto.id } });
    }
}
