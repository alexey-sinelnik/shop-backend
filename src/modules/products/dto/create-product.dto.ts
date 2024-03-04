import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    images: string[];

    @IsString()
    title: string;

    @IsNumber()
    rating: number;

    @IsNumber()
    price: number;

    @IsString()
    dimensions: string;

    @IsNotEmpty()
    colors: string[];

    @IsString()
    description: string;

    @IsNumber()
    discount: number;

    @IsDate()
    expireDiscount: Date;

    @IsBoolean()
    newArrival: boolean;

    @IsString()
    category: string;

    @IsString()
    brand: string;
}
