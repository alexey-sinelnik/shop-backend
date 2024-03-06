import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "@prisma/client";
import { UpdateProductDto } from "./dto/update-product.input";

@Controller("products")
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post("create")
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }

    @Get("get-all-products")
    getAllProduct(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Put(":id")
    updateProduct(
        @Param("id") id: string,
        @Body() updateProductDto: UpdateProductDto
    ): Promise<Product> {
        return this.productService.update(id, updateProductDto);
    }
}
