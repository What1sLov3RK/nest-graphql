import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class createPetDto {
  @Field()
  name: string;
  @Field((type) => Int)
  age: number;
  @Field((type) => Int)
  ownerId?: number;
  @Field({ nullable: true })
  breed?: string;
}
