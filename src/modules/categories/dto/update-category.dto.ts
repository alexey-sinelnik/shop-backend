import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCategoryDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsNotEmpty()
    properties: string;
}
