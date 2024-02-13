import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RemoveProductInput {
    @Field()
    id: string;
}
