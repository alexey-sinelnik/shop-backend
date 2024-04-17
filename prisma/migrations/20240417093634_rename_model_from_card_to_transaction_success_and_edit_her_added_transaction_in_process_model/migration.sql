/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cart";

-- CreateTable
CREATE TABLE "TransactionSuccess" (
    "id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransactionSuccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransactionInProcess" (
    "id" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransactionInProcess_pkey" PRIMARY KEY ("id")
);
