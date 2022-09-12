import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1660183679368 implements MigrationInterface {
  name = 'migration1660183679368';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "password" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isDeleted" boolean NOT NULL DEFAULT false, "ownerId" integer, CONSTRAINT "REL_9884b2ee80eb70b7db4f12e8ae" UNIQUE ("ownerId"), CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "project" ADD CONSTRAINT "FK_9884b2ee80eb70b7db4f12e8aed" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "project" DROP CONSTRAINT "FK_9884b2ee80eb70b7db4f12e8aed"`,
    );
    await queryRunner.query(`DROP TABLE "project"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
