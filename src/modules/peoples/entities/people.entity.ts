import { AbstractEntity } from 'src/common/database/abstract.entity';
import { TRole } from 'src/modules/auth/interface/auth.interface';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Employee } from 'src/modules/employee/entities/employee.entity';

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
  religion: bigint;

  @OneToOne(() => Student, (student) => student.people, { eager: true })
  @JoinColumn({ name: 'reference_id', referencedColumnName: 'id' })
  student?: Student;

  @OneToOne(() => Employee, (employee) => employee.people, { eager: true })
  @JoinColumn({ name: 'reference_id', referencedColumnName: 'id' })
  employee?: Employee;
}
