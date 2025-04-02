import { Injectable } from '@nestjs/common';
import { CreateStudentPeriodicDto } from './dto/create-student-periodic.dto';
import { UpdateStudentPeriodicDto } from './dto/update-student-periodic.dto';
import { StudenPeriodicsRepository } from './student-periodics.repository';
import { FindAllStudentPeriodicsDto } from './dto/find-all-student-periodics.dto';

@Injectable()
export class StudentPeriodicsService {
  constructor(
    private readonly studentPeriodicsRepository: StudenPeriodicsRepository,
  ) {}

  create(createStudentPeriodicDto: CreateStudentPeriodicDto) {
    return this.studentPeriodicsRepository.create(createStudentPeriodicDto);
  }

  findAll(findAllStudentPeriodicDto: FindAllStudentPeriodicsDto) {
    return this.studentPeriodicsRepository.findAll(findAllStudentPeriodicDto);
  }

  findOne(id: string) {
    return this.studentPeriodicsRepository.findOne({ id });
  }

  update(id: string, updateStudentPeriodicDto: UpdateStudentPeriodicDto) {
    return this.studentPeriodicsRepository.findOneAndUpdate(
      { id },
      updateStudentPeriodicDto,
    );
  }

  remove(id: string) {
    return this.studentPeriodicsRepository.findOneAndDelete({ id });
  }
}
