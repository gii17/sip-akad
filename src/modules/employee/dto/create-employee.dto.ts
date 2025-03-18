import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nip: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
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
