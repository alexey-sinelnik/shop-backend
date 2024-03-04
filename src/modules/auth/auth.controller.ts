import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "@prisma/client";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    register(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.authService.register(createUserDto);
    }

    @Post("login")
    login(@Body() loginUserDto: LoginUserDto): Promise<User> {
        return this.authService.login(loginUserDto);
    }
}
