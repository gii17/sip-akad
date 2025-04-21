import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { People } from './entities/people.entity';
import { EmployeeRepository } from '../employee/employee.repository';
import { StudentsRepository } from '../students/students.repository';

@Injectable()
export class PeopleRepository extends AbstractRepository<People> {
  protected logger: Logger = new Logger(PeopleRepository.name);

  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
    private readonly employeeRepository: EmployeeRepository,
    private readonly studentRepository: StudentsRepository,
    entityManager: EntityManager,
  ) {
    super(peopleRepository, entityManager);
  }

  async findOneWithReference(id: string) {
    const people = await super.findOne({ id });
    if (people) {
      // Manual morphing, soalnya typeorm nggak support polymorphic relation
      const referenceId = people.reference_id;
      const referenceType = people.reference_type;

      if (referenceType === 'employee') {
        people.reference = await this.employeeRepository.findOne(
          {
            id: referenceId,
          },
          {
            throwWhenNotFound: false,
          },
        );
      } else if (referenceType === 'student') {
        people.reference = await this.studentRepository.findOne(
          {
            id: referenceId,
          },
          {
            throwWhenNotFound: false,
          },
        );
      }
    }
    return people;
  }
}
