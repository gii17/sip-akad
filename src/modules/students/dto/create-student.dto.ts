import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nim: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nimn: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  fakultas_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  ipk: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  status: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  semester: number;
}
