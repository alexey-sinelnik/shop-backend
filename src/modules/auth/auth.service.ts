import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { Prisma, User } from "@prisma/client";
import { LoginUserDto } from "./dto/login-user.dto";
import { AppErrors } from "../../common/errors";
import { CreateUserDto } from "../users/dto/create-user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    register(createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    async login(loginInput: LoginUserDto): Promise<User> {
        const user: User = await this.userService.findOneByEmail(loginInput.email);
        if (!user) throw new BadRequestException(AppErrors.USER_NOT_EXIST);
        const comparePassword: boolean = await bcrypt.compare(loginInput.password, user.password);
        if (!comparePassword) throw new BadRequestException(AppErrors.WRONG_DATA);
        delete user.password;
        return user;
    }
}
