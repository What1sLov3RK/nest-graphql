import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPetDto } from './dto/createPetDto';
import { Owner } from '../owners/entity/owner.entity';
import { OwnersService } from '../owners/owners.service';
@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownerService: OwnersService,
  ) {}
  async findAllDogies(): Promise<Pet[]> {
    return this.petsRepository.find();
  }
  async createPet(dto: createPetDto): Promise<Pet> {
    const newPet = this.petsRepository.create(dto);
    return await this.petsRepository.save(newPet);
  }
  async findOnePet(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail({ where: { id: +id } });
  }
  async findOwner(id: number): Promise<Owner> {
    return await this.ownerService.findOne(+id);
  }
  async findAllPetsOfOneOwner(ownerId: number) {
    return await this.petsRepository.find({
      where: {
        ownerId: ownerId,
      },
    });
  }
}
