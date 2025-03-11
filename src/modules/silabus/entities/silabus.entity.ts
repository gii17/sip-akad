import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'silabus',
})
export class Silabus extends AbstractEntity<Silabus> {
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;
}
