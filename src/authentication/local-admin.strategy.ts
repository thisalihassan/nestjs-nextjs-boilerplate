import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import ResponseHandler from '@src/common/responses/responseHandler';
import responseMessages from '@src/common/responses/responseMessages';
import { UserEntity } from '@src/users/entities/user.entity';
import { Strategy } from 'passport-local';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LocalAdminStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(private authService: AuthenticationService) {
    super();
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    const user = await this.authService.validateAdminUser({
      username,
      password,
    });
    if (!user) {
      return ResponseHandler.fail(responseMessages.validationFailed);
    }
    return user;
  }
}
