import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateScheduleDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    room_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    day: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    status: number;

}
