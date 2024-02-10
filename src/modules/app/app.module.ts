import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypegooseModule} from "@m8a/nestjs-typegoose";
import configuration from "../../configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypegooseModule.forRoot(process.env.DB_URI)
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
