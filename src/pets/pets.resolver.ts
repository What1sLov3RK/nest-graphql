import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { createPetDto } from './dto/createPetDto';
import { Owner } from '../owners/entity/owner.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petsService.findAllDogies();
  }
  @Mutation((returns) => Pet)
  async createPet(@Args('createPetDto') createPetDto: createPetDto): Promise<Pet> {
    return await this.petsService.createPet(createPetDto);
  }
  @Query((returns) => Pet)
  async getOnePet(@Args('id') id: number) {
    return await this.petsService.findOnePet(+id);
  }
  @Query(returns=> [Pet])
  async getAllPetsOfOwner(@Args('ownerId') ownerId: number){
    return await this.petsService.findAllPetsOfOneOwner(+ownerId);
  }
  @ResolveField((returns) => Owner)
  async owner(@Parent() pet: Pet) {
    return await this.petsService.findOwner(pet.ownerId);
  }
}
