import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import { CreateStripeTransactionInProgressDto } from "./dto/create-stripe-transaction-in-progress.dto";
import { UpdateStripeDto } from "./dto/update-stripe.dto";
import Stripe from "stripe";

@Controller("stripe")
export class StripeController {
    constructor(private readonly stripeService: StripeService) {}

    @Post("create-transaction")
    createTransaction(
        @Body() createStripeDto: CreateStripeTransactionInProgressDto
    ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
        return this.stripeService.createTransaction(createStripeDto);
    }

    @Get()
    findAll() {
        return this.stripeService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.stripeService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateStripeDto: UpdateStripeDto) {
        return this.stripeService.update(+id, updateStripeDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.stripeService.remove(+id);
    }

    @Post()
    test(@Body() body: any) {
        console.log(body);
    }
}
