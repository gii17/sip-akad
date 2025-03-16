import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'schedule',
})
export class Schedule extends AbstractEntity<Schedule> {
    @Column({ type: 'varchar', length: 50 })
    room_id: string;
  
    @Column({ type: 'integer' })
    day: number;
  
    // @Column({ type: 'integer' })
    // idx: number;
  
    @Column({ type: 'integer'})
    status: number;
}
