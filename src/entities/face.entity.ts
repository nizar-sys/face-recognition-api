import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Face } from '@interfaces/face.interface';

@Entity()
export class FaceEntity extends BaseEntity implements Face {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  face: string;

  @Column()
  @CreateDateColumn()
  gender: string;

  @Column()
  @UpdateDateColumn()
  age: number;
}
