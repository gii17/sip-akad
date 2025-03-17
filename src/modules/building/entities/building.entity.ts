import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
    name: 'building',
})

export class Building extends AbstractEntity<Building> {
    @Column({ type: 'varchar', length: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    floor: string;

    @Column({ type: 'varchar', length: 255 })
    status: string;

}