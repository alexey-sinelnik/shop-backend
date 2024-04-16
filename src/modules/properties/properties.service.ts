import { Injectable } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PropertiesService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createPropertyDto: CreatePropertyDto, categoryId: string) {
        const existProperty = await this.prisma.properties.findFirst({
            where: { uuid: createPropertyDto.uuid }
        });
        if (existProperty) {
            await this.prisma.categoryProperties.create({
                data: {
                    categoriesId: categoryId,
                    propertiesId: existProperty.id
                }
            });
        } else {
            const property = await this.prisma.properties.create({
                data: {
                    name: createPropertyDto.name,
                    uuid: createPropertyDto.uuid,
                    values: [...createPropertyDto.values],
                    categoriesId: categoryId
                }
            });

            await this.prisma.categoryProperties.create({
                data: {
                    categoriesId: categoryId,
                    propertiesId: property.id
                }
            });
        }
    }

    update(updatePropertyDto: UpdatePropertyDto) {
        return this.prisma.properties.update({
            where: { id: updatePropertyDto.id },
            data: {
                name: updatePropertyDto.name,
                uuid: updatePropertyDto.uuid,
                values: [...updatePropertyDto.values]
            }
        });
    }

    remove(id: number) {
        return `This action removes a #${id} property`;
    }
}
