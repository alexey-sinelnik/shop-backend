import { Body, Controller, Post, Patch, Get, Delete, Param, Query } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CreateCategoryDto } from "./dto/create-category.dto";

@Controller("categories")
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post("create")
    createCategory(@Body() createCategoriesDto: CreateCategoryDto) {
        return this.categoriesService.create(createCategoriesDto);
    }

    @Get("get-all")
    getAllCategories() {
        return this.categoriesService.findAll();
    }

    @Patch()
    updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoriesService.update(updateCategoryDto.id, updateCategoryDto);
    }

    @Delete(":id")
    removeCategories(@Param("id") id: string) {
        return this.categoriesService.remove(id);
    }
}
