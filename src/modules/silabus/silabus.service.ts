import { Injectable } from '@nestjs/common';
import { CreateSilabusDto } from './dto/create-silabus.dto';
import { UpdateSilabusDto } from './dto/update-silabus.dto';
import { SilabusRepository } from './silabus.repository';

@Injectable()
export class SilabusService {
  constructor(private readonly silabusRepostory: SilabusRepository) {}

  async create(createSilabusDto: CreateSilabusDto) {
    return await this.silabusRepostory.create({
      name: 'Testing',
    });
  }

  async findAll() {
    return this.silabusRepostory.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} silabus`;
  }

  update(id: number, updateSilabusDto: UpdateSilabusDto) {
    return `This action updates a #${id} silabus`;
  }

  remove(id: number) {
    return `This action removes a #${id} silabus`;
  }
}
