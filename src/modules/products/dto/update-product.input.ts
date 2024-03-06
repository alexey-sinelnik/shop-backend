import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ProductColors } from "./create-product.dto";

export class UpdateProductDto {
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
    colors: ProductColors[];

    @IsString()
    description: string;

    @IsNumber()
    discount: number;

    @IsDate()
    @Type(() => Date)
    expireDiscount: Date;

    @IsBoolean()
    newArrival: boolean;

    @IsString()
    category: string;

    @IsString()
    brand: string;
}
