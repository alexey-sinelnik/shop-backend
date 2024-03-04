import { IsString } from "class-validator";

export class UpdateProductInput {
    @IsString()
    id: string;
}
