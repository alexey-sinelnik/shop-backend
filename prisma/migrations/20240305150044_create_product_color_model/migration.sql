-- CreateTable
CREATE TABLE "ProductColors" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "colorsId" TEXT NOT NULL,

    CONSTRAINT "ProductColors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductColors" ADD CONSTRAINT "ProductColors_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColors" ADD CONSTRAINT "ProductColors_colorsId_fkey" FOREIGN KEY ("colorsId") REFERENCES "Colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
