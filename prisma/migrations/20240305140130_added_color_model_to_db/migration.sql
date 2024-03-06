/*
  Warnings:

  - You are about to drop the column `colors` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "colors";

-- CreateTable
CREATE TABLE "Colors" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Colors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Colors" ADD CONSTRAINT "Colors_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
