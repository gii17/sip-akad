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
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FindAllScheduleDto } from './dto/find-all-schedule.dto';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleEnum } from '../auth/interface/auth.interface';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Role(RoleEnum.Dosen)
@ApiBearerAuth('access-token')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @ResponseFormat({ entity: 'schedule', actionType: 'create' })
  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @ResponseFormat({ entity: 'schedule', actionType: 'read' })
  @Get()
  findAll(@Query() findAllScheduleDto: FindAllScheduleDto) {
    return this.scheduleService.findAll(findAllScheduleDto);
  }

  @ResponseFormat({ entity: 'schedule', actionType: 'read' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @ResponseFormat({ entity: 'schedule', actionType: 'update' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleService.update(id, updateScheduleDto);
  }

  @ResponseFormat({ entity: 'schedule', actionType: 'delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }
}

// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ScheduleService } from './schedule.service';
// import { CreateScheduleDto } from './dto/create-schedule.dto';
// import { UpdateScheduleDto } from './dto/update-schedule.dto';

// @Controller('schedule')
// export class ScheduleController {
//   constructor(private readonly scheduleService: ScheduleService) {}

//   @Post()
//   create(@Body() createScheduleDto: CreateScheduleDto) {
//     return this.scheduleService.create(createScheduleDto);
//   }

//   @Get()
//   findAll() {
//     return this.scheduleService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.scheduleService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
//     return this.scheduleService.update(+id, updateScheduleDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.scheduleService.remove(+id);
//   }
// }
