/*
  Warnings:

  - You are about to drop the column `transaction_id` on the `TransactionInProcess` table. All the data in the column will be lost.
  - You are about to drop the column `transaction_id` on the `TransactionSuccess` table. All the data in the column will be lost.
  - Added the required column `transactionId` to the `TransactionInProcess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transactionId` to the `TransactionSuccess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TransactionInProcess" DROP COLUMN "transaction_id",
ADD COLUMN     "transactionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TransactionSuccess" DROP COLUMN "transaction_id",
ADD COLUMN     "transactionId" TEXT NOT NULL;
