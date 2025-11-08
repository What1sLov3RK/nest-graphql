import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from '../owners/entity/owner.entity';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field((type) => Int)
  age: number;
  @Column({ nullable: true })
  @Field({ nullable: true })
  breed?: string;
  @Column()
  @Field(type => Int)
  ownerId: number;
  @ManyToOne(() => Owner, (owner) => owner.pets, { nullable: true })
  @Field((type) => Owner, { nullable: true })
  owner: Owner;
}
