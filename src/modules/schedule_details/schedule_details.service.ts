import { Injectable } from '@nestjs/common';
import { CreateScheduleDetailDto } from './dto/create-schedule_detail.dto';
import { UpdateScheduleDetailDto } from './dto/update-schedule_detail.dto';
import { ScheduleDetailRepository } from './schedule_detail.repository';
import { FindAllScheduleDetailDto } from './dto/find-all-schedule-detail.dto';

@Injectable()
export class ScheduleDetailsService {
  constructor(private readonly scheduleDetailRepostory: ScheduleDetailRepository) {}

  async create(createScheduleDetailDto: CreateScheduleDetailDto) {
    return await this.scheduleDetailRepostory.create(createScheduleDetailDto);
  }

  async findAll(findAllScheduleDetailDto: FindAllScheduleDetailDto) {
    return this.scheduleDetailRepostory.findAll(findAllScheduleDetailDto);
  }

  findOne(id: string) {
    return this.scheduleDetailRepostory.findOne({ id });
  }

  update(id: string, updateScheduleDetailDto: UpdateScheduleDetailDto) {
    return this.scheduleDetailRepostory.findOneAndUpdate({ id }, updateScheduleDetailDto);
  }

  remove(id: string) {
    return this.scheduleDetailRepostory.findOneAndDelete({ id });
  }
}
