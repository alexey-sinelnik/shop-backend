import { PartialType } from "@nestjs/mapped-types";
import { CreateStripeTransactionInProgressDto } from "./create-stripe-transaction-in-progress.dto";

export class UpdateStripeDto extends PartialType(CreateStripeTransactionInProgressDto) {}
