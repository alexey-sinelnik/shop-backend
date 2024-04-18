import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionInfo } from "src/common/types/stripe";
import { TransactionSuccess } from "@prisma/client";
import { StripePaymentStatuses } from "../../common/enums/stripe";

@Injectable()
export class WebhookService {
    constructor(private readonly prisma: PrismaService) {}

    async createTransaction(transaction: TransactionInfo): Promise<void> {
        if (!transaction?.billing_details?.email) return;
        try {
            if (transaction.status === StripePaymentStatuses.succeeded) {
                const existTransaction: TransactionSuccess =
                    await this.prisma.transactionSuccess.findUnique({
                        where: { transactionId: transaction.id }
                    });
                if (existTransaction) return;
                await this.prisma.transactionSuccess.create({
                    data: {
                        transactionId: transaction.id,
                        amount: transaction.amount,
                        email: transaction.billing_details.email,
                        currency: transaction.currency,
                        date: new Date(transaction.created * 1000),
                        status: transaction.status
                    }
                });
            } else if (transaction.status === StripePaymentStatuses.processing) {
                await this.prisma.transactionInProcess.create({
                    data: {
                        transactionId: transaction.id,
                        amount: transaction.amount,
                        currency: transaction.currency,
                        date: new Date(transaction.created * 1000),
                        status: transaction.status
                    }
                });
            }
        } catch (error: any) {
            console.log(error);
        }
    }
}
