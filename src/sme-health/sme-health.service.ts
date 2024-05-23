import { Injectable } from '@nestjs/common';
import { CreateSmeHealthDto } from './dto/create-sme-health.dto';
import { UpdateSmeHealthDto } from './dto/update-sme-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SmeHealth } from './entities/sme-health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SmeHealthService {
  constructor(
    @InjectRepository(SmeHealth)
    private smeHealthRepository: Repository<SmeHealth>,
  ) {}

  create(createSmeHealthDto: CreateSmeHealthDto) {
    if (createSmeHealthDto.email !== createSmeHealthDto.reEmail) {
      throw new Error('Email is not matching with confirmation email.');
    }
    return this.smeHealthRepository.save(createSmeHealthDto);
  }

  findAll() {
    return this.smeHealthRepository.find();
  }

  update(id: number, updateSmeHealthDto: UpdateSmeHealthDto) {
    return this.smeHealthRepository.update(id, updateSmeHealthDto);
  }
  updateExisted(updateSmeHealthDto: UpdateSmeHealthDto) {
    return this.smeHealthRepository.save(updateSmeHealthDto);
  }
}
