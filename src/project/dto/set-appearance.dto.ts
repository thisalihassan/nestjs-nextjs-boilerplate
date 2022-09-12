import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsUrl } from 'class-validator';

export class AppearanceDto {
  @ApiProperty()
  @IsHexColor()
  primaryColour: string;

  @ApiProperty()
  @IsHexColor()
  secondaryColour: string;

  @ApiProperty()
  @IsUrl()
  logo: string;
}
