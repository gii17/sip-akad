import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
    name: 'room',
})

export class Room extends AbstractEntity<Room> {
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    code: string;

    @Column({ type: 'integer' })
    building_id: number;


    @Column({ type: 'varchar', length: 255 })
    status: string;

}
