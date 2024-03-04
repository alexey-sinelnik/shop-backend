import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma, User } from "@prisma/client";
import { AppErrors } from "../../common/errors";
import { BadRequestException, Injectable } from "@nestjs/common";
import { LoginUserDto } from "../auth/dto/login-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user: User = await this.prisma.user.findUnique({
            where: { email: createUserDto.email }
        });
        if (user) throw new BadRequestException(AppErrors.USER_EXIST);
        const salt: string = await bcrypt.genSalt();
        createUserDto.password = await bcrypt.hash(createUserDto.password, salt);
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    findOneById(id: string): Promise<User> {
        return this.prisma.user.findFirst({ where: { id } });
    }

    findOneByEmail(email: string): Promise<User> {
        return this.prisma.user.findUnique({ where: { email } });
    }
}
