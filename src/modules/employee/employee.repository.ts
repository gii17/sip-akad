import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { AbstractRepository } from 'src/common/database/abstract.repository';

@Injectable()
export class EmployeeRepository extends AbstractRepository<Employee> {
  protected logger = new Logger(EmployeeRepository.name);

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    entityManager: EntityManager,
  ) {
    super(employeeRepository, entityManager);
  }

  async beforeCreate(entity: Employee): Promise<void> {
    const existingEmployee = await this.findOne({ nip: entity.nip }, {}, false);
    if (existingEmployee) {
      this.logger.warn(`Employee with NIP ${entity.nip} already exists`);
      throw new ConflictException('Employee with this NIP already exists');
    }
  }
}
