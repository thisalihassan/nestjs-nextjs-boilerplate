import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { AppearanceDto } from './set-appearance.dto';

export class CreateProjectDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  principal: CreateUserDto;

  @ApiProperty()
  appearane: AppearanceDto;
}
