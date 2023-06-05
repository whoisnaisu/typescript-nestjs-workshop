import { Organization, OrganizationService } from './organization.service';
import { User, UsersService } from 'src/user/users.service';
import { OrganizationUserDTO } from './dto/OrganizationUserDTO';

export class OrganizationController {
  constructor(
    private organizationService: OrganizationService,
    private userService: UsersService,
  ) {}

  findAllUserInOrganization(): OrganizationUserDTO[] {
    const organization = this.organizationService.findAll();
    const users = this.userService.findAll();
    const user_organization: OrganizationUserDTO[] = [];
    for (const org of organization) {
      const current_organization = org;
      const current_users: User[] = [];

      for (const user of users) {
        if (user.organizationId === org.id) current_users.push(user);
      }

      user_organization.push({
        id: current_organization.id,
        name: current_organization.name,
        users: current_users,
      });
    }

    return user_organization;
  }
}
