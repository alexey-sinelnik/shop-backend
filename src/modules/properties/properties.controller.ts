import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { CreatePropertyDto } from "./dto/create-property.dto";
import { UpdatePropertyDto } from "./dto/update-property.dto";

@Controller("properties")
export class PropertiesController {
    constructor(private readonly propertiesService: PropertiesService) {}

    @Patch()
    update(@Body() updatePropertyDto: UpdatePropertyDto) {
        return this.propertiesService.update(updatePropertyDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.propertiesService.remove(+id);
    }
}
