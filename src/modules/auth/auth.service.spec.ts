import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { User } from "../users/entities/user.entity";

describe("AuthService", (): void => {
    let authService: AuthService;
    let usersService: UsersService;

    beforeEach(async (): Promise<void> => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UsersService,
                    useValue: {
                        create: jest.fn()
                    }
                }
            ]
        }).compile();

        authService = module.get<AuthService>(AuthService);
        usersService = module.get<UsersService>(UsersService);
    });

    it("should be defined", (): void => {
        expect(authService).toBeDefined();
    });

    it("should call the create method of the usersService", async (): Promise<void> => {
        const createUserInput = {
            password: "Password",
            email: `test${Date.now()}@test.com`,
            firstName: "John",
            lastName: "Doe",
            country: "Ukraine",
            city: "Lviv",
            address: "Address",
            street: "Street",
            postalCode: "06234"
        };
        const createdUser: User = {} as User;

        (usersService.create as jest.Mock).mockResolvedValue(createdUser);

        const result: User = await authService.register(createUserInput);

        expect(usersService.create).toHaveBeenCalledWith(createUserInput);
        expect(result).toBe(createdUser);
    });
});
