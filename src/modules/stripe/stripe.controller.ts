import { Controller, Post, Body } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import { CreateStripeTransactionInProgressDto } from "./dto/create-stripe-transaction-in-progress.dto";
import Stripe from "stripe";

@Controller("stripe")
export class StripeController {
    constructor(private readonly stripeService: StripeService) {}

    @Post("init-transaction")
    initTransaction(
        @Body() createStripeDto: CreateStripeTransactionInProgressDto
    ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
        return this.stripeService.initTransaction(createStripeDto);
    }
}
