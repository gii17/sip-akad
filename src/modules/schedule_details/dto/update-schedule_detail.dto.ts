import { PartialType } from '@nestjs/swagger';
import { CreateScheduleDetailDto } from './create-schedule_detail.dto';

export class UpdateScheduleDetailDto extends PartialType(CreateScheduleDetailDto) {}
