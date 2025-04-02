import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStudentPeriodicDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    type: 'string',
    default: null,
  })
  @Transform((value) => value.value || null)
  parentId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  studentId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  code: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: 'number',
  })
  semester: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  summaryId: string;
}
