import { BadRequestException, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { LoginUserInput } from "./dto/loginUserInput";
import { CreateUserInput } from "../users/dto/create-user.input";
import { User } from "../users/entities/user.entity";
import { AppErrors } from "../../common/errors";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    register(createAuthInput: CreateUserInput): Promise<User> {
        return this.userService.create(createAuthInput);
    }

    async login(loginInput: LoginUserInput): Promise<User> {
        const user: User = await this.userService.findOneByEmail(
            loginInput.email
        );
        if (!user) throw new BadRequestException(AppErrors.USER_NOT_EXIST);
        const comparePassword: boolean = await bcrypt.compare(
            loginInput.password,
            user.password
        );
        if (!comparePassword)
            throw new BadRequestException(AppErrors.WRONG_DATA);
        delete user.password;
        return user;
    }
}
