import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppearanceDto } from './dto/set-appearance.dto';
import { ProjectEntity } from './entities/project.entity';

@Controller('api/project')
@ApiTags('school')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: ProjectEntity,
  })
  async create(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<ProjectEntity> {
    return await this.projectService.create(createProjectDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [ProjectEntity],
  })
  findAll(): Promise<ProjectEntity[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: ProjectEntity,
  })
  findOne(@Param('id') id: string): Promise<ProjectEntity> {
    return this.projectService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    type: ProjectEntity,
  })
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.projectService.remove(+id);
  }

  @Patch('appearance/:id')
  @ApiResponse({
    status: 200,
    type: ProjectEntity,
  })
  updateAppearance(
    @Param('id') id: number,
    @Body() setAppearanceDto: AppearanceDto,
  ): Promise<ProjectEntity> {
    return this.projectService.setAppearance(id, setAppearanceDto);
  }
}
