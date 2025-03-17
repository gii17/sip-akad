import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ScheduleDetailsService } from './schedule_details.service';
import { CreateScheduleDetailDto } from './dto/create-schedule_detail.dto';
import { UpdateScheduleDetailDto } from './dto/update-schedule_detail.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FindAllScheduleDetailDto } from './dto/find-all-schedule-detail.dto';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleEnum } from '../auth/interface/auth.interface';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Role(RoleEnum.Dosen)
@ApiBearerAuth('access-token')
@Controller('schedule_detail')
export class ScheduleDetailsController {
  constructor(private readonly scheduleDetailService: ScheduleDetailsService) {}

  @ResponseFormat({ entity: 'schedule_detail', actionType: 'create' })
  @Post()
  create(@Body() createScheduleDetailDto: CreateScheduleDetailDto) {
    return this.scheduleDetailService.create(createScheduleDetailDto);
  }

  @ResponseFormat({ entity: 'schedule_detail', actionType: 'read' })
  @Get()
  findAll(@Query() findAllScheduleDetailDto: FindAllScheduleDetailDto) {
    return this.scheduleDetailService.findAll(findAllScheduleDetailDto);
  }

  @ResponseFormat({ entity: 'schedule_detail', actionType: 'read' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleDetailService.findOne(id);
  }

  @ResponseFormat({ entity: 'schedule_detail', actionType: 'update' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateScheduleDetailDto: UpdateScheduleDetailDto) {
    return this.scheduleDetailService.update(id, UpdateScheduleDetailDto);
  }

  @ResponseFormat({ entity: 'schedule_detail', actionType: 'delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleDetailService.remove(id);
  }
}

