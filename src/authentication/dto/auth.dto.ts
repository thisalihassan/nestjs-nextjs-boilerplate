import { UserRole } from '@src/common/role.class';

export class AuthDto {
  userId: number;
  email: string;
  role: UserRole;
}
