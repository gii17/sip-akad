import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSummaryDto {
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
  referenceId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  referenceCode: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: 'number',
  })
  status: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: 'number',
  })
  flag: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: 'string',
  })
  modelId: string;
}
