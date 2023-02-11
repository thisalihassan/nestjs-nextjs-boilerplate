import { Module } from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { UsersController } from '@src/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
