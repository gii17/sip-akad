import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FindAllEmployeeDto } from './dto/find-all-employee.dto';
import { PeopleRepository } from '../peoples/people.repository';
import { UserRepository } from '../user/user.repository';
import { DataSource } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly employeeRepository: EmployeeRepository,
    private readonly userRepository: UserRepository,
    private readonly peopleRepository: PeopleRepository,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { user, people, ...employee } = createEmployeeDto;
    const hashedPassword = await hash(user.password, 10);

    return await this.dataSource.transaction(async (entityManager) => {
      const employeeRepository = this.employeeRepository.factory(entityManager);
      const userRepository = this.userRepository.factory(entityManager);
      const peopleRepository = this.peopleRepository.factory(entityManager);

      const [createdEmployee, createdUser] = await Promise.all([
        employeeRepository.create(employee),
        userRepository.create({
          ...user,
          password: hashedPassword,
        }),
      ]);

      const createdPeople = await peopleRepository.create({
        ...people,
        reference_id: createdEmployee.id,
        reference_type: 'employee',
      });

      return {
        employee: createdEmployee,
        user: createdUser,
        people: createdPeople,
      };
    });
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
