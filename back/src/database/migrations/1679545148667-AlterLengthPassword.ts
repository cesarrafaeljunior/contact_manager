import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterLengthPassword1679545148667 implements MigrationInterface {
    name = 'AlterLengthPassword1679545148667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(50) NOT NULL`);
    }

}
