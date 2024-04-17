import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";

export class CreateStripeTransactionInProgressDto {
    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString()
    date: string;
}

export class CreateStripeSuccessTransactionDto {
    @IsEmail()
    email: string;

    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsDate()
    date: Date;
}
