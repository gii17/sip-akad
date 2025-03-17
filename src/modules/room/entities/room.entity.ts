import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Building } from 'src/modules/building/entities/building.entity';

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

    @ManyToOne(() => Building)
    @JoinColumn({ name: 'building_id' })
    building: Building;

    @Column({ type: 'smallint' })
    status: number;

}
