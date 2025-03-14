import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'silabus',
})
export class Silabus extends AbstractEntity<Silabus> {
  @Column({ type: 'varchar', length: 100, nullable: false })
  code: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'integer' })
  priority: number;

  @Column({ type: 'varchar', length: 255 })
  k1: string;

  @Column({ type: 'varchar', length: 255 })
  k2: string;

  @Column({ type: 'varchar', length: 255 })
  k3: string;

  @Column({ type: 'varchar', length: 255 })
  k4: string;

  @Column({ type: 'integer' })
  mapel_id: number;

  @Column({ type: 'year' })
  year_competensi: string;
}
