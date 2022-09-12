import { OmitType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends OmitType(CreateProjectDto, [
  'name',
  'principal',
  'appearane',
] as const) {}
