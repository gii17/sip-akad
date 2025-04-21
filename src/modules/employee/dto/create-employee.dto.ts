import { ApiProperty, OmitType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePeopleDto } from 'src/modules/peoples/dto/create-people.dto';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto.';

class CreateEmployeePeopleDto extends OmitType(CreatePeopleDto, [
  'reference_id',
  'reference_type',
]) {}
export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nip: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  hire_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  sallary: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateEmployeePeopleDto)
  people: CreateEmployeePeopleDto;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateUserDto)
  user: CreateUserDto;
}
