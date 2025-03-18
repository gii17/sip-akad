import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { AbstractRepostory } from 'src/common/database/abstract.repository';

@Injectable()
export class EmployeeRepository extends AbstractRepostory<Employee> {
  protected logger = new Logger(EmployeeRepository.name);

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    entityManager: EntityManager,
  ) {
    super(employeeRepository, entityManager);
  }
}
