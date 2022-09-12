import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@src/users/entities/user.entity';
import { ProjectEntity } from './entities/project.entity';
import { UsersModule } from '@src/users/users.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([UserEntity, ProjectEntity])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
