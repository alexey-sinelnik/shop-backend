import { Injectable } from "@nestjs/common";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Categories } from "@prisma/client";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { PropertiesService } from "../properties/properties.service";

@Injectable()
export class CategoriesService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly propertiesService: PropertiesService
    ) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<Categories> {
        const category = await this.prisma.categories.create({
            data: {
                name: createCategoryDto.name
            }
        });
        createCategoryDto.properties.map(async property => {
            await this.propertiesService.create(property, category.id);
        });
        return category;
    }

    findAll(): Promise<any> {
        return this.prisma.categories.findMany();
    }

    findOne(id: string): Promise<Categories> {
        return this.prisma.categories.findFirst({ where: { id } });
    }

    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Categories> {
        return this.prisma.categories.update({
            where: { id },
            data: {
                name: updateCategoryDto.name
            }
        });
    }

    remove(id: string): Promise<Categories> {
        return this.prisma.categories.delete({ where: { id } });
    }
}
