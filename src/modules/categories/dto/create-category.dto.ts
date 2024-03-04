import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    name: string;

    @IsNotEmpty()
    properties: PropertyType[];
}

class PropertyType {
    @IsString()
    name: string;

    @IsString()
    values: string;

    @IsString()
    uuid: string;
}
