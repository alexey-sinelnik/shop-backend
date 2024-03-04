import { Injectable } from "@nestjs/common";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PropertiesService {
    constructor(private readonly prisma: PrismaService) {}

    create(createPropertyDto: CreatePropertyDto, categoryId: string) {
        return this.prisma.properties.create({
            data: {
                name: createPropertyDto.name,
                uuid: createPropertyDto.uuid,
                values: [...createPropertyDto.values],
                categoriesId: categoryId
            }
        });
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
