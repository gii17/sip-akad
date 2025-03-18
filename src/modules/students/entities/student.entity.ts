import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { People } from 'src/modules/peoples/entities/people.entity';

@Entity({ name: 'students' })
export class Students extends AbstractEntity<Students> {
  @Column({ type: 'integer', nullable: false })
  nim: number;

  @Column({ type: 'integer', nullable: false })
  nimn: number;

  @Column({ type: 'integer', nullable: false })
  fakultas_id: number;

  @Column({ type: 'float', nullable: false })
  ipk: number;

  @Column({ type: 'smallint', nullable: false })
  status: number;

  @Column({ type: 'integer', nullable: false })
  semester: number;

  @OneToOne(() => People, (people) => people.student)
  people: People;
}
