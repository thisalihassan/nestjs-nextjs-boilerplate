import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '@src/users/users.service';
import { CreateUserDto } from '@src/users/dto/create-user.dto';
import { UpdateUserDto } from '@src/users/dto/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@src/authentication/jwt-auth.guard';
import { UserEntity } from './entities/user.entity';

@Controller('api/users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 200,
    type: UserEntity,
  })
  create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  @ApiResponse({
    status: 200,
    type: [UserEntity],
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':email')
  @ApiResponse({
    status: 200,
    type: UserEntity,
  })
  findOne(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    type: UserEntity,
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.usersService.remove(+id);
  }
}
