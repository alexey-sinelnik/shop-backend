import { Field, ObjectType } from "@nestjs/graphql";
import { now, Schema as ProductSchema } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@ObjectType()
@Schema()
export class Product {
    @Field()
    _id: string;

    @Field(() => [String])
    @Prop()
    images: string[];

    @Field()
    @Prop()
    title: string;

    @Field()
    @Prop()
    rating: number;

    @Field()
    @Prop()
    price: number;

    @Field()
    @Prop()
    dimensions: string;

    @Field(() => [String])
    @Prop()
    colors: string[];

    @Field()
    @Prop()
    description: string;

    @Field()
    @Prop({ default: now() })
    createdAt: Date;

    @Field()
    @Prop({ default: now() })
    updatedAt: Date;

    @Field()
    @Prop()
    discount: number;

    @Field()
    @Prop()
    expireDiscount: Date;

    @Field()
    @Prop()
    newArrival: boolean;

    @Field()
    @Prop()
    category: string;

    @Field()
    @Prop()
    brand: string;
}

export const ProductModel: ProductSchema<Product> =
    SchemaFactory.createForClass(Product);
