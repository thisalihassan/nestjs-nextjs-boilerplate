import { DataSource } from 'typeorm';

const myDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'secret',
  database: 'projectz',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_history',
  migrationsRun: true,
});

export default myDataSource;
