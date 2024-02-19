import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RemoveProductInput } from "./dto/remove-roduct.input";
import { FindOneProductInput } from "./dto/find-product.input";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { FindByCategoryInput } from "./dto/find-by-category.input";
import { Product } from "./entities/product.entity";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

    create(createProductInput: CreateProductInput): Promise<Product> {
        return this.productModel.create(createProductInput);
    }

    findAll(): Promise<Product[]> {
        return this.productModel.find();
    }

    findByCategory(findByCategoryInput: FindByCategoryInput): Promise<Product[]> {
        return this.productModel.find({ category: findByCategoryInput.category });
    }

    findOne(findOneProductInput: FindOneProductInput): Promise<Product> {
        return this.productModel.findOne({ _id: findOneProductInput.id });
    }

    update(id: string, updateProductInput: UpdateProductInput): Promise<Product> {
        return this.productModel.findOneAndUpdate({ _id: id }, updateProductInput);
    }

    remove(removeProductInput: RemoveProductInput): Promise<Product> {
        return this.productModel.findOneAndDelete({ _id: removeProductInput.id });
    }
}
