import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class FindOneProductInput {
    @Field()
    id: string;
}
