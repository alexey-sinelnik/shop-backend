-- CreateTable
CREATE TABLE "CategoryProperties" (
    "id" TEXT NOT NULL,
    "categoriesId" TEXT,
    "propertiesId" TEXT NOT NULL,

    CONSTRAINT "CategoryProperties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryProperties" ADD CONSTRAINT "CategoryProperties_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryProperties" ADD CONSTRAINT "CategoryProperties_propertiesId_fkey" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
