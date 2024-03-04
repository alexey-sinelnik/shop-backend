import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    country: string;

    @IsString()
    city: string;

    @IsString()
    address: string;

    @IsString()
    street: string;

    @IsString()
    postalCode: string;
}
