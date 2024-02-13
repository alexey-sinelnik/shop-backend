import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductInput {
    @Field(() => [String])
    images: string[];

    @Field()
    title: string;

    @Field()
    rating: number;

    @Field()
    price: number;

    @Field()
    dimensions: string;

    @Field(() => [String])
    colors: string[];

    @Field()
    description: string;

    @Field()
    discount: number;

    @Field()
    expireDiscount: Date;

    @Field()
    newArrival: boolean;

    @Field()
    category: string;

    @Field()
    brand: string;
}
