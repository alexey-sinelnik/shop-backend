import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModel } from "./entities/user.entity";

@Module({
    imports: [MongooseModule.forFeature([{ name: "User", schema: UserModel }])],
    providers: [UsersResolver, UsersService],
    exports: [UsersService]
})
export class UsersModule {}
