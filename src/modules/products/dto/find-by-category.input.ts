import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FindByCategoryInput {
    @Field()
    category: string;
}
