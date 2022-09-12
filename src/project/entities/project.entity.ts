import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from '@src/users/entities/user.entity';
import { AppearanceDto } from '../dto/set-appearance.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @OneToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn()
  @ApiProperty()
  owner: UserEntity;

  @Column()
  @ApiProperty()
  address: string;

  @Column({ type: 'json' })
  @ApiProperty()
  appearance: AppearanceDto;

  @Column({ default: true })
  @Exclude()
  isActive: boolean;

  @Column({ default: false })
  @Exclude()
  isDeleted: boolean;
}
