import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name) private readonly categoryModel: typeof Model<Category>
    ) {}

    create(createCategoryInput: CreateCategoryInput): Promise<Category> {
        return this.categoryModel.create(createCategoryInput);
    }

    findAll(): Promise<Category[]> {
        return this.categoryModel.find();
    }

    findOne(id: string): Promise<Category> {
        return this.categoryModel.findOne({ _id: id });
    }

    update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<Category> {
        return this.categoryModel.findOneAndUpdate({ _id: id }, updateCategoryInput);
    }

    remove(id: string): Promise<Category> {
        return this.categoryModel.findOneAndDelete({ _id: id });
    }
}
