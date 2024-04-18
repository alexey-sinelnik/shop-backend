import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "../../configuration";
import { UsersModule } from "../users/users.module";
import { AuthModule } from "../auth/auth.module";
import { CategoriesModule } from "../categories/categories.module";
import { PropertiesModule } from "../properties/properties.module";
import { ProductsModule } from "../products/products.module";
import { StripeModule } from "../stripe/stripe.module";
import { WebhookModule } from "../webhook/webhook.module";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration]
        }),
        ScheduleModule.forRoot(),
        UsersModule,
        AuthModule,
        CategoriesModule,
        PropertiesModule,
        ProductsModule,
        StripeModule,
        WebhookModule
    ]
})
export class AppModule {}
