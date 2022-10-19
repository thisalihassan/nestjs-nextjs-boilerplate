import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { UserEntity } from '@src/users/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { UserRole } from '@src/common/role.class';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async loginUser(user: AuthDto): Promise<string> {
    const accessToken = this.jwtService.sign(user);
    return accessToken;
  }

  async validateUser(loginDto: LoginDto): Promise<UserEntity | null> {
    const { username, password } = loginDto;
    const user = await this.usersService.findOne(username);
    if (user && (await compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async validateAdminUser(loginDto: LoginDto): Promise<UserEntity | null> {
    const user = await this.usersService.findOne(loginDto.username);
    if (
      user &&
      user.role === UserRole.ADMIN &&
      (await compare(loginDto.password, user.password))
    ) {
      return user;
    }
    return null;
  }
}
