import { Injectable } from '@nestjs/common';

export type User = {
  email: string;
  password: string;
  name: string;
  organizationId: string;
};

export class UsersService {
  private readonly users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  createUser(user: User): User[] {
    this.users.push(user);
    const users = this.users.filter(({ email }) => email === user.email);
    return users;
  }
}
