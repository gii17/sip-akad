import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsDto } from './create-student.dto';

export class UpdateStudentsDto extends PartialType(CreateStudentsDto) {}
