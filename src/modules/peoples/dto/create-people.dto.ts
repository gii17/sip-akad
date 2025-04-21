import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsDateString,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreatePeopleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  reference_id: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['employee', 'student'])
  reference_type: 'employee' | 'student';

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  sex: number;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  dob: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  religion: number;
}
