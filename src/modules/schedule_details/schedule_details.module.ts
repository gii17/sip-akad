import { Module } from '@nestjs/common';
import { ScheduleDetailsService } from './schedule_details.service';
import { ScheduleDetailsController } from './schedule_details.controller';
import { ScheduleDetailRepository } from './schedule_detail.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleDetail } from './entities/schedule_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleDetail])],
  controllers: [ScheduleDetailsController],
  providers: [ScheduleDetailsService, ScheduleDetailRepository],
})
export class ScheduleDetailsModule {}
