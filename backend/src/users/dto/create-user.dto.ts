import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@src/common/role.class';
import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ nullable: true, required: false })
  @IsPhoneNumber()
  phoneNo?: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ enum: UserRole, default: UserRole.END_USER })
  @IsEnum(UserRole)
  role: UserRole;
}
