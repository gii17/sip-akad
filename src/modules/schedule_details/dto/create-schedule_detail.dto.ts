// export class CreateScheduleDetailDto {}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateScheduleDetailDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    room_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    parent_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    reference_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    reference_code: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    mapel_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    status: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    time_start: Date;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    time_end: Date;

    // @Column({ type: 'varchar', length: 50 })
    // room_id: string;

    // @Column({ type: 'varchar', length: 50 })
    // parent_id: string;

    // @Column({ type: 'varchar', length: 50 })
    // reference_id: string;

    // @Column({ type: 'varchar', length: 50 })
    // reference_code: string;
  
    // @Column({ type: 'varchar', length: 50 })
    // mapel_id: string;

    // @Column({ type: 'integer'})
    // status: number;

    // @Column({ type: 'varchar'})
    // time_start: Date;

    // @Column({ type: 'varchar'})
    // time_end: Date;
}

