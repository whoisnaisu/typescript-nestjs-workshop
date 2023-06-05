import { Organization, OrganizationService } from './organization.service';
import { UsersService } from "../01-user/users.service";

export class OrganizationController {
  constructor(
    organizationService: OrganizationService,
    userService: UsersService
  ) {}

  findAllUserInOrganization(): OrganizationUserDTO[] {
    // 1) หาวิธีดึง user ท้งหมดมาก่อน
    // 2) หาวิธีดึง organization ทั้งหมดมาก่อน

    let user_organization: OrganizationUserDTO[] = []
    for (const org of organization) {
      let current_organization = org
      let current_users: User[] = []
  
      for (const user of users) {
        if(user.organizationId === org.id)
        current_users.push(user)
      }
  
      user_organization.push({
        id: current_organization.id,
        name: current_organization.name,
        users: current_users
      })
      
    }
  
    return user_organization;
  }
}
