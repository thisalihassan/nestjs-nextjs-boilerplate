import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  username: string;

  @ApiProperty({ required: false })
  subdomain?: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
