import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { UserRole } from '@src/common/role.class';

@Entity('user', { schema: 'public' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: false })
  @ApiProperty()
  firstName: string;

  @Column({ nullable: false })
  @ApiProperty()
  lastName: string;

  @Column({ type: 'varchar', nullable: false })
  @Exclude()
  password: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty()
  phoneNo: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
  })
  @ApiProperty({ enum: UserRole, default: UserRole.END_USER })
  role: UserRole;

  @Column({ default: true })
  @Exclude()
  isActive: boolean;

  @Column({ default: false })
  @Exclude()
  isDeleted: boolean;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await hash(this.password, 10);
  }

  @ApiProperty()
  get fullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
