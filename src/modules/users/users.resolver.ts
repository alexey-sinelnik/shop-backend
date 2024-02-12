import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(() => User)
    createUser(@Args("input") dto: CreateUserInput): Promise<User> {
        return this.usersService.create(dto);
    }

    @Query(() => [User], { name: "users" })
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Mutation(() => User)
    updateUser(@Args("input") updateUserInput: UpdateUserInput): Promise<User> {
        return this.usersService.update(updateUserInput.id, updateUserInput);
    }

    @Mutation(() => User)
    removeUser(
        @Args("input", { type: () => String }) id: string
    ): Promise<boolean> {
        return this.usersService.remove(id);
    }
}
