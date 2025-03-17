import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'schedule_detail',
})
export class ScheduleDetail extends AbstractEntity<ScheduleDetail> {
    @Column({ type: 'varchar', length: 50 })
    room_id: string;

    @Column({ type: 'varchar', length: 50 })
    parent_id: string;

    @Column({ type: 'varchar', length: 50 })
    reference_id: string;

    @Column({ type: 'varchar', length: 50 })
    reference_code: string;
  
    @Column({ type: 'varchar', length: 50 })
    mapel_id: string;

    @Column({ type: 'integer'})
    status: number;

    @Column({ type: 'varchar'})
    time_start: Date;

    @Column({ type: 'varchar'})
    time_end: Date;
}
// Table schedule_details {
//     id string
//     parent_id string
//     reference_id string 
//     reference_code string
//     mapel_id string
//     status smallinteger
//     time_start datetime
//     time_and datetime
//     created_at datetime
//     updated_at datetime
//   }

