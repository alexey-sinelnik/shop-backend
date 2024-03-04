import { IsString } from "class-validator";

export class FindOneProductDto {
    @IsString()
    id: string;
}
