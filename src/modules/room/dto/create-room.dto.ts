import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateRoomDto {
    @ApiProperty({ example: 'Room A' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name: string;

    @ApiProperty({ example: 'RMA123' })
    @IsString()
    @MaxLength(255)
    code: string;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    building_id: number;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    @IsNumber()
    status: number;
}
