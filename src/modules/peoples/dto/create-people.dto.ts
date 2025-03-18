import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  reference_id: string;

  @IsString()
  @IsNotEmpty()
  reference_type: string;

  @IsNumber()
  @IsNotEmpty()
  sex: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dob: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNumber()
  @IsNotEmpty()
  religion: number;
}
