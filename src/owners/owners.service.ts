import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entity/owner.entity';
import { Repository } from 'typeorm';
import { createOwnerDto } from './dto/createOwner.input';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownersRepository: Repository<Owner>,
  ) {}

  async createOwner(dto: createOwnerDto) {
    const newOwner = this.ownersRepository.create(dto);
    return await this.ownersRepository.save(newOwner);
  }

  async findAll(): Promise<Owner[]> {
    return await this.ownersRepository.find();
  }

  async findOne(id: number): Promise<Owner> {
    return await this.ownersRepository.findOneOrFail({ where: { id: +id } });
  }
}
