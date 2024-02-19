import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as CategorySchema } from "mongoose";

@ObjectType()
@Schema()
export class Category {
    @Field()
    _id: string;

    @Field()
    @Prop({ unique: true })
    name: string;
}

export const CategoryModel: CategorySchema<Category> = SchemaFactory.createForClass(Category);
