import { Body, Controller, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller("products")
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post("create")
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
}
