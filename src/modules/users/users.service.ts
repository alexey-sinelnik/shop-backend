import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { Model } from "mongoose";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { AppErrors } from "../../common/errors";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async create(dto: CreateUserInput): Promise<User> {
        const user: User = await this.userModel.findOne({ email: dto.email });
        if (user) throw new BadRequestException(AppErrors.USER_EXIST);
        const salt: string = await bcrypt.genSalt();
        dto.password = await bcrypt.hash(dto.password, salt);
        return this.userModel.create(dto);
    }

    findAll(): Promise<User[]> {
        return this.userModel.find().lean();
    }

    findOneById(id: string): Promise<User> {
        return this.userModel.findById(id).lean();
    }

    findOneByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email }).lean();
    }

    update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
        return this.userModel.findOneAndUpdate({ _id: id }, updateUserInput);
    }

    async remove(id: string): Promise<boolean> {
        return this.userModel.findByIdAndDelete(id);
    }
}
