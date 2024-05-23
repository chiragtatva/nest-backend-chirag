import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type UserRoleType = 'admin' | 'staff';
@Entity()
export class SmeHealth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyUEN: string;

  @Column()
  companyName: string;

  @Column()
  fullName: string;

  @Column()
  position: string;

  @Column()
  email: string;

  @Column()
  contact: string;

  @Column()
  isConditionsAccepted: boolean;

  @Column({
    type: 'simple-array',
  })
  documents: string[];
}
