import { Injectable } from '@nestjs/common';
import { CreateSilabusDto } from './dto/create-silabus.dto';
import { UpdateSilabusDto } from './dto/update-silabus.dto';
import { SilabusRepository } from './silabus.repository';
import { FindAllSilabusDto } from './dto/find-all-silabus.dto';

@Injectable()
export class SilabusService {
  constructor(private readonly silabusRepostory: SilabusRepository) {}

  async create(createSilabusDto: CreateSilabusDto) {
    return await this.silabusRepostory.create(createSilabusDto);
  }

  async findAll(findAllSilabusDto: FindAllSilabusDto) {
    return this.silabusRepostory.findAll(findAllSilabusDto);
  }

  findOne(id: string) {
    return this.silabusRepostory.findOne({ id });
  }

  update(id: string, updateSilabusDto: UpdateSilabusDto) {
    return this.silabusRepostory.findOneAndUpdate({ id }, updateSilabusDto);
  }

  remove(id: string) {
    return this.silabusRepostory.findOneAndDelete({ id });
  }
}
