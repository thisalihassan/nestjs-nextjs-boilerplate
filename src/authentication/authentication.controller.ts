import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { UserEntity } from '@src/users/entities/user.entity';
import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';

@Controller('api')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiResponse({
    status: 200,
    type: UserEntity,
  })
  @Post('login')
  @UseGuards(AuthGuard('local'))
  @ApiBody({ type: LoginDto })
  async login(
    @Request() req,
    @Res({ passthrough: true }) response: Response<UserEntity>,
  ) {
    const accessToken = await this.authenticationService.loginUser({
      userId: req.user.id,
      email: req.user.email,
    });
    response.cookie(
      'Authorization',
      { token: accessToken },
      { httpOnly: true },
    );
    return req.user;
  }
}
