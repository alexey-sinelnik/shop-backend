/*
  Warnings:

  - The `values` column on the `Properties` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Properties" DROP COLUMN "values",
ADD COLUMN     "values" TEXT[];
