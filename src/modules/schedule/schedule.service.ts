import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ScheduleRepository } from './schedule.repository';
import { FindAllScheduleDto } from './dto/find-all-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly scheduleRepostory: ScheduleRepository) {}

  async create(createScheduleDto: CreateScheduleDto) {
    return await this.scheduleRepostory.create(createScheduleDto);
  }

  async findAll(findAllScheduleDto: FindAllScheduleDto) {
    return this.scheduleRepostory.findAll(findAllScheduleDto);
  }

  findOne(id: string) {
    return this.scheduleRepostory.findOne({ id });
  }

  update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleRepostory.findOneAndUpdate({ id }, updateScheduleDto);
  }

  remove(id: string) {
    return this.scheduleRepostory.findOneAndDelete({ id });
  }
}
