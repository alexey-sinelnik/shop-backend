/*
  Warnings:

  - You are about to drop the column `email` on the `TransactionInProcess` table. All the data in the column will be lost.
  - Added the required column `email` to the `TransactionSuccess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransactionInProcess" DROP COLUMN "email";

-- AlterTable
ALTER TABLE "TransactionSuccess" ADD COLUMN     "email" TEXT NOT NULL;
