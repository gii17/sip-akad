import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1741706086389 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.createTable(
    //     new Table({
    //         name: "users",
    //         columns: [
    //             {
    //                 name: "id",
    //                 type: "varchar",
    //                 length: "15",
    //                 isPrimary: true,
    //             },
    //             {
    //                 name: "username",
    //                 type: "varchar",
    //                 isNullable: false,
    //             },
    //             {
    //                 name: "email",
    //                 type: "varchar",
    //                 isUnique: true,
    //                 isNullable: false,
    //             },
    //             {
    //                 name: "password",
    //                 type: "varchar",
    //                 isNullable: false,
    //             },
    //             {
    //                 name: "lastToken",
    //                 type: "varchar",
    //                 isNullable: true,
    //             },
    //             {
    //                 name: "created_at",
    //                 type: "timestamp",
    //                 default: "CURRENT_TIMESTAMP",
    //             },
    //             {
    //                 name: "updated_at",
    //                 type: "timestamp",
    //                 default: "CURRENT_TIMESTAMP",
    //                 onUpdate: "CURRENT_TIMESTAMP",
    //             },
    //         ],
    //     })
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropTable('users');
  }
}
