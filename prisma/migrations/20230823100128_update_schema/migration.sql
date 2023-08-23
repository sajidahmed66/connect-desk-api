/*
  Warnings:

  - You are about to drop the column `featues` on the `Package` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "featues",
ADD COLUMN     "features" TEXT[];
