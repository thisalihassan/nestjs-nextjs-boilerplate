import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { DatabaseModule } from '@src/database/database.module';
import { UsersModule } from '@src/users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
