import { IsString } from "class-validator";

export class FindByCategoryDto {
    @IsString()
    category: string;
}
