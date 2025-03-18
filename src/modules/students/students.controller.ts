import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentsDto } from './dto/create-student.dto';
import { UpdateStudentsDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentsDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne('');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentsDto) {
    return this.studentsService.update('', updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove('');
  }
}
