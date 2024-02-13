import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { RemoveProductInput } from "./dto/remove-roduct.input";
import { FindOneProductInput } from "./dto/find-product.input";

@Resolver(() => Product)
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Mutation(() => Product)
    createProduct(@Args("input") createProductInput: CreateProductInput): Promise<Product> {
        return this.productsService.create(createProductInput);
    }

    @Query(() => [Product], { name: "products" })
    findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Query(() => Product, { name: "product" })
    findOne(@Args("input") findOneProductInput: FindOneProductInput): Promise<Product> {
        return this.productsService.findOne(findOneProductInput);
    }

    @Mutation(() => Product)
    updateProduct(@Args("input") updateProductInput: UpdateProductInput): Promise<Product> {
        return this.productsService.update(updateProductInput.id, updateProductInput);
    }

    @Mutation(() => Product)
    removeProduct(@Args("input") removeProductInput: RemoveProductInput): Promise<Product> {
        return this.productsService.remove(removeProductInput);
    }
}
