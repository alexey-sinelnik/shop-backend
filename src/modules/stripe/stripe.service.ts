import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service";
import Stripe from "stripe";
import { CreateStripeTransactionInProgressDto } from "./dto/create-stripe-transaction-in-progress.dto";
import { TransactionInProcess } from "@prisma/client";

@Injectable()
export class StripeService {
    private stripe: Stripe;

    constructor(
        private readonly configService: ConfigService,
        private readonly prisma: PrismaService
    ) {
        this.stripe = new Stripe(this.configService.get<string>("stripe_key"));
    }

    async initTransaction(
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

    @Cron("0 0 * * * *")
    async removeExpiredTransaction() {
        const transactions: TransactionInProcess[] =
            await this.prisma.transactionInProcess.findMany();

        for (const transaction of transactions) {
            const createTransactionDate: number = new Date(transaction.date).getTime();
            const today: number = new Date(Date.now()).getTime();
            const time: number = today - createTransactionDate;

            if (time > 3600000) {
                await this.stripe.paymentIntents.cancel(transaction.transactionId);
                await this.prisma.transactionInProcess.delete({ where: { id: transaction.id } });
            }
        }
    }
}
