import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '@src/users/users.service';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { AppearanceDto } from './dto/set-appearance.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepo: Repository<ProjectEntity>,
    private readonly usersService: UsersService,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const user = await this.usersService.create({
      ...createProjectDto.principal,
    });
    const project = this.projectRepo.create({
      ...createProjectDto,
      owner: user,
    });
    await this.projectRepo.save(project);
    return project;
  }

  async setAppearance(id: number, setAppearanceDto: AppearanceDto) {
    this.projectRepo.update(
      { id },
      {
        appearance: {
          primaryColour: setAppearanceDto.primaryColour,
          secondaryColour: setAppearanceDto.secondaryColour,
        },
      },
    );
    return this.projectRepo.findOneBy({ id: id });
  }

  findAll() {
    const all = this.projectRepo.find();
    return all;
  }

  findOne(id: number) {
    const project = this.projectRepo.findOneBy({ id: id });
    return project;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = this.projectRepo.findOneBy({ id: id });
    (await project).address = updateProjectDto.address;
    return project;
  }

  remove(id: number) {
    this.projectRepo.delete({ id: id });
    return `This action removes a #${id} project`;
  }
}
