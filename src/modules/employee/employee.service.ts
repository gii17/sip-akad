import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FindAllEmployeeDto } from './dto/find-all-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.create(createEmployeeDto);
  }

  async findAll(findAllEmployeeDto: FindAllEmployeeDto) {
    return this.employeeRepository.findAll(findAllEmployeeDto);
  }

  findOne(id: string) {
    return this.employeeRepository.findOne({ id });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepository.findOneAndUpdate({ id }, updateEmployeeDto);
  }

  remove(id: string) {
    return this.employeeRepository.findOneAndDelete({ id });
  }
}
