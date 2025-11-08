import { Field, InputType, Int, ObjectType} from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from '../../pets/pet.entity';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field((type) => Int)
  age: number;
  @OneToMany(() => Pet, (pet) => pet.owner, { nullable: true })
  @Field((type) => [Pet], { nullable: true })
  pets: Pet[];
}
