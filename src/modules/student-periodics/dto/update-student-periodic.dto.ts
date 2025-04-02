import { PartialType } from '@nestjs/swagger';
import { CreateStudentPeriodicDto } from './create-student-periodic.dto';

export class UpdateStudentPeriodicDto extends PartialType(CreateStudentPeriodicDto) {}
