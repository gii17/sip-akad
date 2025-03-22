import { AbstractEntity } from 'src/common/database/abstract.entity';
import { TRole } from 'src/modules/auth/interface/auth.interface';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Employee } from 'src/modules/employee/entities/employee.entity';
import { Students } from 'src/modules/students/entities/student.entity';

@Entity({ name: 'peoples' })
export class People extends AbstractEntity<People> {
  @Column()
  name: string;

  @Column({ unique: true })
  reference_id: string;

  @Column()
  reference_type: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  sex: number;

  @Column({
    type: 'date',
  })
  dob: Date;

  @Column({
    type: 'text',
    nullable: false,
  })
  location: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  religion: number;

  @OneToOne(() => Students, (student) => student.people, { eager: true })
  @JoinColumn({
    name: 'reference_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_student_people',
  })
  student?: Students;

  @OneToOne(() => Employee, (employee) => employee.people, { eager: true })
  @JoinColumn({
    name: 'reference_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'FK_employee_people',
  })
  employee?: Employee;
}
