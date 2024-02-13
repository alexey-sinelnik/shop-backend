import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsResolver } from "./products.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductModel } from "./entities/product.entity";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductModel }
        ])
    ],
    providers: [ProductsResolver, ProductsService]
})
export class ProductsModule {}
