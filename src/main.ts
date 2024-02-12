import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 5000
  await app.listen(port);
}
bootstrap();
