-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "parentCategoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_parentCategoryId_fkey" FOREIGN KEY ("parentCategoryId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
