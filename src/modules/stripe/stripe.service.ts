import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import Stripe from "stripe";
import { CreateStripeTransactionInProgressDto } from "./dto/create-stripe-transaction-in-progress.dto";
import { UpdateStripeDto } from "./dto/update-stripe.dto";

@Injectable()
export class StripeService {
    private stripe: Stripe;

    constructor(
        private readonly configService: ConfigService,
        private readonly prisma: PrismaService
    ) {
        this.stripe = new Stripe(this.configService.get<string>("stripe_key"));
    }

    async createTransaction(
        createStripeTransactionDto: CreateStripeTransactionInProgressDto
    ): Promise<Stripe.Response<Stripe.PaymentIntent>> {
        const transactionInProcess = await this.stripe.paymentIntents.create({
            amount: createStripeTransactionDto.amount,
            currency: createStripeTransactionDto.currency,
            payment_method_types: ["card"]
        });

        await this.prisma.transactionInProcess.create({
            data: {
                transactionId: transactionInProcess.id,
                amount: createStripeTransactionDto.amount,
                currency: createStripeTransactionDto.currency,
                date: createStripeTransactionDto.date,
                status: transactionInProcess.status
            }
        });

        return transactionInProcess;
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
