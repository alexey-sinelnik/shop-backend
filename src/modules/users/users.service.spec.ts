import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

describe("UsersService", (): void => {
    let usersService: UsersService;

    const mockUserModel = {
        find: jest.fn(),
        findById: jest.fn(),
        findOne: jest.fn(),
        findOneAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
        create: jest.fn()
    };

    beforeEach(async (): Promise<void> => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: getModelToken(User.name),
                    useValue: mockUserModel
                }
            ]
        }).compile();

        usersService = module.get<UsersService>(UsersService);
    });

    it("should be defined", (): void => {
        expect(usersService).toBeDefined();
    });

    it("should create a user", async (): Promise<void> => {
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
        mockUserModel.findOne.mockResolvedValue(null);
        mockUserModel.create.mockResolvedValue(createdUser);

        const result: User = await usersService.create(createUserInput);

        expect(result).toEqual(createdUser);
    });
});
