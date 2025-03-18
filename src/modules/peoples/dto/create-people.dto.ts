import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  reference_id: number;

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
