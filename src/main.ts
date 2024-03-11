import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app/app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://admin.yourecom.shop",
            "https://yourecom.shop"
        ]
    });
    app.useGlobalPipes(new ValidationPipe());

    const port = process.env.PORT || 5000;
    await app.listen(port);
}

bootstrap();
