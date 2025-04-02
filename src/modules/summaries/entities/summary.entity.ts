import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Students } from 'src/modules/students/entities/student.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'summaries' })
export class Summary extends AbstractEntity<Summary> {
  @Column({ type: 'varchar', length: 255, nullable: true })
  @ManyToOne(() => Summary, (summary) => summary.id)
  parentId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referenceId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referenceCode: string;

  @Column({ type: 'smallint', nullable: false, default: 0 })
  status: number;

  @Column({ type: 'smallint', nullable: false, default: 0 })
  flag: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  modelId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  modelCode: string;

  @ManyToOne(() => Students, (student) => student.id)
  @JoinColumn({
    name: 'model_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_summary_student',
  })
  student: Students;
}
