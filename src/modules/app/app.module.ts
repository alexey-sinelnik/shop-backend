import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "../../configuration";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { CategoriesModule } from "../categories/categories.module";
import { PropertiesModule } from "../properties/properties.module";
import { ProductsModule } from "../products/products.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        UsersModule,
        AuthModule,
        CategoriesModule,
        PropertiesModule,
        ProductsModule
    ]
})
export class AppModule {}
