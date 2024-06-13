/*
  Warnings:

  - Added the required column `user_id` to the `Todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todos" ADD COLUMN     "user_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
