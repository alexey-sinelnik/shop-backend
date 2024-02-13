import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "../../configuration";
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { ProductsModule } from "../products/products.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            driver: ApolloDriver
        }),
        MongooseModule.forRoot(process.env.DB_URI),
        UsersModule,
        AuthModule,
        ProductsModule
    ]
})
export class AppModule {}
