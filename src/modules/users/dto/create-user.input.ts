import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsString } from "class-validator";

@InputType()
export class CreateUserInput {
    @IsString()
    @Field()
    password: string;

    @IsEmail()
    @Field()
    email: string;

    @IsString()
    @Field()
    firstName: string;

    @IsString()
    @Field()
    lastName: string;

    @IsString()
    @Field()
    country: string;

    @IsString()
    @Field()
    city: string;

    @IsString()
    @Field()
    address: string;

    @IsString()
    @Field()
    street: string;

    @IsString()
    @Field()
    postalCode: string;
}
