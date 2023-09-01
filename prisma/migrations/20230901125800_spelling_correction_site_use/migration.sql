/*
  Warnings:

  - You are about to drop the `SiteUseTutotial` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SiteUseTutotial";

-- CreateTable
CREATE TABLE "SiteUseTutorial" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "video_link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SiteUseTutorial_pkey" PRIMARY KEY ("id")
);
