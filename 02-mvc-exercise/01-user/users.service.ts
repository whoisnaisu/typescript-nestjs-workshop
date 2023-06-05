export type ___ = {
  // 1) อันนี้ควรเป็น DTO ของอะไรนะ
  // write code here
  // ...
};

export class UsersService {
  // 2) ตรงนี้คุ้นๆ มั้ย มันคือ model อะไรหรือป่าว
  private readonly ___: ___[] = [];

  // 3) function นี้ควรจะทำอะไร และ return อะไรออกมานะ
  findAll(): ___[] {
    // write code here
    // ....
  }

  createUser(user: User): User[] {
    // 5) น่าจะต้อง save user ก่อนหรือป่าว
    // write code here
    // ....
    const user = this.users.filter(({ email }) => email === user.email);
    // 6) return user
    // write code here
    // ....
    return 
  }
}

// instruction to scope area of focus.
