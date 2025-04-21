import { forwardRef, Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleRepository } from './people.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { EmployeeModule } from '../employee/employee.module';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([People]),
    forwardRef(() => EmployeeModule),
    StudentsModule,
  ],
  providers: [PeopleService, PeopleRepository],
  controllers: [PeopleController],
  exports: [PeopleRepository],
})
export class PeopleModule {}
