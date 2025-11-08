import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { createOwnerDto } from './dto/createOwner.input';
import { Owner } from './entity/owner.entity';

@Resolver()
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation((returns) => Owner)
  createOwner(@Args('createOwnerDto') createOwnerDto: createOwnerDto): Promise<Owner> {
    return this.ownersService.createOwner(createOwnerDto);
  }

  @Query(returns=> [Owner])
  findAllOwners(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @Query(returns=> Owner)
  async findOneOwner(@Args('id') id: number): Promise<Owner> {
    return await this.ownersService.findOne(+id);
  }
}
