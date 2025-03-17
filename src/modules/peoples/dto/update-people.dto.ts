import { PartialType } from '@nestjs/swagger';
import { FindAllPeopleDto } from 'src/modules/peoples/dto/find-all-people.dto';

export class UpdatePeopleDto extends PartialType(FindAllPeopleDto) {}
