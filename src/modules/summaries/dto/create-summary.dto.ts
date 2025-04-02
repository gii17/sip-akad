import { ApiPropertyOptional } from '@nestjs/swagger';
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
  @ApiPropertyOptional({
    type: 'string',
  })
  referenceId: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    type: 'string',
  })
  referenceCode: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiPropertyOptional({
    type: 'number',
  })
  status: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiPropertyOptional({
    type: 'number',
  })
  flag: number;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({
    type: 'string',
  })
  modelId: string;
}
