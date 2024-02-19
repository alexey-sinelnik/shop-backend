import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesResolver } from "./categories.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategoryModel } from "./entities/category.entity";

@Module({
    imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategoryModel }])],
    providers: [CategoriesResolver, CategoriesService]
})
export class CategoriesModule {}
