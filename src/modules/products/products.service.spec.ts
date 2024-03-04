import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";

describe("ProductsService", () => {
    let productsService: ProductsService;
    const mockProductModel = {
        create: jest.fn(),
        find: jest.fn(),
        findOne: jest.fn(),
        findOneAndUpdate: jest.fn(),
        findOneAndDelete: jest.fn()
    };

    beforeEach(async (): Promise<void> => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductsService,
                {
                    provide: getModelToken(Product.name),
                    useValue: mockProductModel
                }
            ]
        }).compile();

        productsService = module.get<ProductsService>(ProductsService);
    });

    afterEach((): void => {
        jest.clearAllMocks();
    });

    it("should create a product", async (): Promise<void> => {
        const mockCreateProductInput: CreateProductDto = {} as Product;
        const mockCreatedProduct: CreateProductDto = {} as Product;
        mockProductModel.create.mockReturnValue(mockCreatedProduct);

        const createdProduct: Product = await productsService.create(mockCreateProductInput);

        expect(mockProductModel.create).toHaveBeenCalledWith(mockCreateProductInput);
        expect(createdProduct).toEqual(mockCreatedProduct);
    });

    it("should find all products", async (): Promise<void> => {
        const mockProducts: Product[] = [{} as Product];
        mockProductModel.find.mockReturnValue(mockProducts);

        const allProducts: Product[] = await productsService.findAll();

        expect(mockProductModel.find).toHaveBeenCalled();
        expect(allProducts).toEqual(mockProducts);
    });
});
