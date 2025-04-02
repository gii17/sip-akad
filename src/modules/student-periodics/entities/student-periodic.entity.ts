import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Students } from 'src/modules/students/entities/student.entity';
import { Summary } from 'src/modules/summaries/entities/summary.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'student_periodics' })
export class StudentPeriodic extends AbstractEntity<StudentPeriodic> {
  @Column({ type: 'varchar', length: 255, nullable: true })
  @ManyToOne(() => StudentPeriodic, (studentPeriodic) => studentPeriodic.id)
  parentId: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  studentId: string;

  @ManyToOne(() => Students, (student) => student.id)
  @JoinColumn({ name: 'studentId', referencedColumnName: 'id' })
  student: Students;

  @Column({ type: 'varchar', length: 255, nullable: false })
  code: string;

  @Column({ type: 'int', nullable: false })
  semester: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  summaryId: string;

  @ManyToOne(() => Summary, (summary) => summary.id)
  @JoinColumn({ name: 'summaryId', referencedColumnName: 'id' })
  summary: Summary;
}
