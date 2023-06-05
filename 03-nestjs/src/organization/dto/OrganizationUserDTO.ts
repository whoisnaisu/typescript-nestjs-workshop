import { User } from 'src/user/users.service';

export type OrganizationUserDTO = {
  id: string;
  name: string;
  users: User[];
};
