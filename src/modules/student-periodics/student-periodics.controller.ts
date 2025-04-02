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
import { StudentPeriodicsService } from './student-periodics.service';
import { CreateStudentPeriodicDto } from './dto/create-student-periodic.dto';
import { UpdateStudentPeriodicDto } from './dto/update-student-periodic.dto';
import { FindAllStudentPeriodicsDto } from './dto/find-all-student-periodics.dto';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Controller('student-periodics')
export class StudentPeriodicsController {
  constructor(
    private readonly studentPeriodicsService: StudentPeriodicsService,
  ) {}

  @ResponseFormat({ actionType: 'read', entity: 'student periodics' })
  @Post()
  create(@Body() createStudentPeriodicDto: CreateStudentPeriodicDto) {
    return this.studentPeriodicsService.create(createStudentPeriodicDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'student periodics' })
  @Get()
  findAll(
    @Query()
    findAllStudentPeriodicsDto: FindAllStudentPeriodicsDto,
  ) {
    return this.studentPeriodicsService.findAll(findAllStudentPeriodicsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentPeriodicsService.findOne(id);
  }

  @ResponseFormat({ actionType: 'update', entity: 'student periodics' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentPeriodicDto: UpdateStudentPeriodicDto,
  ) {
    return this.studentPeriodicsService.update(id, updateStudentPeriodicDto);
  }

  @ResponseFormat({ actionType: 'delete', entity: 'student periodics' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentPeriodicsService.remove(id);
  }
}
