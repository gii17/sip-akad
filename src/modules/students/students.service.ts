import { Injectable } from '@nestjs/common';
import { StudentsRepository } from './students.repository';
import { CreateStudentsDto } from './dto/create-student.dto';
import { UpdateStudentsDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async create(createStudentsDto: CreateStudentsDto) {
    return await this.studentsRepository.create(createStudentsDto);
  }

  async findAll() {
    return this.studentsRepository.findAll({
      page: 1,
      limit: 10,
      sort: 'ASC',
      search: '',
    });
  }

  findOne(id: string) {
    return this.studentsRepository.findOne({ id });
  }

  update(id: string, updateStudentsDto: UpdateStudentsDto) {
    return this.studentsRepository.findOneAndUpdate({ id }, updateStudentsDto);
  }

  remove(id: string) {
    return this.studentsRepository.findOneAndDelete({ id });
  }
}
