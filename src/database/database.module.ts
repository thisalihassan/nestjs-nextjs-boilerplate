import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

const isDev = process.env.NODE_ENV === 'development';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: isDev,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      logger: 'advanced-console',
      logging: isDev,
    }),
  ],
})
export class DatabaseModule {}
