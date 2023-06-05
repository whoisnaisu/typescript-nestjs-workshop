import { UsersService } from "./users.service";

export class UsersController {
  constructor(userService: UsersService) {}
  // 3) code here...
  findAll(): ___[] {
    return this.userService.findAll();
  }

  // function ต้องการอะไร และต้องใช้อะไร
  // hint: เราจะระบุรูปแบบและโครงสร้างของข้อมูลโดยใช้อะไร
  create(___: ___) {
    return this.userService.createUser(createUserDTO);
  }
}
