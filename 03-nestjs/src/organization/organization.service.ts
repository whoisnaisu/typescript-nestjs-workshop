import { User } from 'src/user/users.service';

export type Organization = {
  id: string;
  name: string;
};

export class OrganizationService {
  private readonly organization: Organization[] = [];

  findAll(): Organization[] {
    return this.organization;
  }
}
