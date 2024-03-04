import { PartialType } from "@nestjs/mapped-types";
import { CreatePropertyDto } from "./create-property.dto";
import { IsString } from "class-validator";

export class UpdatePropertyDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    uuid: string;

    @IsString()
    values: string;
}
