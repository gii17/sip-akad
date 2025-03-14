export enum RoleEnum {
  Mahasiswa = 'mahasiswa',
  Dosen = 'dosen',
  Admin = 'admin',
}

export type TRole = `${RoleEnum}`;

export interface IUser {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: TRole;
}
