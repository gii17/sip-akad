import { PartialType } from '@nestjs/mapped-types';
import { CreateSilabusDto } from './create-silabus.dto';

export class UpdateSilabusDto extends PartialType(CreateSilabusDto) {}
