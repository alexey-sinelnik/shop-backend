import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as UserSchema } from "mongoose";

@ObjectType()
@Schema()
export class User {
    @Field()
    _id: string;

    @Field()
    @Prop()
    password: string;

    @Field()
    @Prop()
    email: string;

    @Field()
    @Prop()
    firstName: string;

    @Field()
    @Prop()
    lastName: string;

    @Field()
    @Prop()
    country: string;

    @Field()
    @Prop()
    city: string;

    @Field()
    @Prop()
    address: string;

    @Field()
    @Prop()
    street: string;

    @Field()
    @Prop()
    postalCode: string;
}

export const UserModel: UserSchema<User> = SchemaFactory.createForClass(User);
