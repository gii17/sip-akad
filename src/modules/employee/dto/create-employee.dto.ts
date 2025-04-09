import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDate, IsDateString } from 'class-validator';

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
}
