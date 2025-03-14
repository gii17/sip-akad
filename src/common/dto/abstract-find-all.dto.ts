import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsIn, IsOptional } from 'class-validator';

export class AbstractFindAllDto {
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  page: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  limit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsIn(['asc', 'desc'])
  sort: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search: string;
}
