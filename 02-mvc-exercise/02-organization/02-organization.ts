import { Organization } from "./organization.service";

// 0) ย้ายเจ้านี้ไปก่อนนะ
type OrganizationUserDTO {
  id: string;
  name: string;
  users: User[]
}

// 1) ดู instruction ที่ organization.controller.ts ได้เลย
function findAllUserInOrganization(
  users: User[],
  organization: Organization[],
) {

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