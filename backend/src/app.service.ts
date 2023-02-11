import { Injectable } from '@nestjs/common';
import { UserRole } from '@src/common/role.class';
import { UsersService } from '@src/users/users.service';

@Injectable()
export class AppService {
  constructor(private userService: UsersService) {}

  async run() {
    await this.userService.create({
      firstName: 'Super',
      lastName: 'Admin',
      email: 'super-admin@example.com',
      password: 'admin',
      role: UserRole.ADMIN,
    });
  }
}
