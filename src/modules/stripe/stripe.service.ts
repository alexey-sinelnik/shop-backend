import { Injectable } from "@nestjs/common";
import { CreateStripeDto } from "./dto/create-stripe.dto";
import { UpdateStripeDto } from "./dto/update-stripe.dto";
import Stripe from "stripe";
import { ConfigService } from "@nestjs/config";
import { Cart } from "../../common/types/stripe";

@Injectable()
export class StripeService {
    private stripe: Stripe;

    constructor(private readonly configService: ConfigService) {
        this.stripe = new Stripe(this.configService.get<string>("stripe_key"));
    }

    create(createStripeDto: Cart) {
        // const totalCost = createStripeDto.reduce(
        //     (acc, item) => acc + item.price * item.quantity,
        //     0
        // );

        return this.stripe.paymentIntents.create({
            amount: 40 * 100,
            currency: "USD",
            payment_method_types: ["card"]
        });
    }

    findAll() {
        return `This action returns all stripe`;
    }

    findOne(id: number) {
        return `This action returns a #${id} stripe`;
    }

    update(id: number, updateStripeDto: UpdateStripeDto) {
        return `This action updates a #${id} stripe`;
    }

    remove(id: number) {
        return `This action removes a #${id} stripe`;
    }
}
