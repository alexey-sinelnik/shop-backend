import { Controller, Post, Body } from "@nestjs/common";
import { WebhookService } from "./webhook.service";

@Controller("webhook")
export class WebhookController {
    constructor(private readonly webhookService: WebhookService) {}

    @Post()
    createTransaction(@Body() createWebhookDto: any) {
        return this.webhookService.createTransaction(createWebhookDto.data.object);
    }
}
