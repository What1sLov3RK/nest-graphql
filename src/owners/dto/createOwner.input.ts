import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class createOwnerDto {
  @Field()
  name: string;
  @Field((type) => Int)
  age: number;
  @Field({ nullable: true })
  breed?: string;
}
