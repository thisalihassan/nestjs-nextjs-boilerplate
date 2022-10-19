import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'email',
  'password',
  'role',
] as const) {}
