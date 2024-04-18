import { IsNumber, IsString } from "class-validator";

export class CreateStripeTransactionInProgressDto {
    @IsNumber()
    amount: number;

    @IsString()
    currency: string;

    @IsString()
    date: string;
}
