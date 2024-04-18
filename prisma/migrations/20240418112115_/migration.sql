/*
  Warnings:

  - A unique constraint covering the columns `[transactionId]` on the table `TransactionSuccess` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TransactionSuccess_transactionId_key" ON "TransactionSuccess"("transactionId");
