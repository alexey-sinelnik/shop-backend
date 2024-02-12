import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { User } from "../users/entities/user.entity";
import { LoginUserInput } from "./dto/loginUserInput";
import { CreateUserInput } from "../users/dto/create-user.input";

@Resolver(() => User)
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @Mutation(() => User)
    register(@Args("input") createUserInput: CreateUserInput): Promise<User> {
        return this.authService.register(createUserInput);
    }

    @Mutation(() => User)
    login(@Args("input") loginUserInput: LoginUserInput): Promise<User> {
        return this.authService.login(loginUserInput);
    }
}
