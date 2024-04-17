/*
  Warnings:

  - Added the required column `status` to the `TransactionInProcess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `TransactionSuccess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransactionInProcess" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TransactionSuccess" ADD COLUMN     "status" TEXT NOT NULL;
