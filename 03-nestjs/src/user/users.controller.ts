import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User, UsersService } from './users.service';

export class UsersController {
  constructor(private userService: UsersService) {}

  findAll(): User[] {
    return this.userService.findAll();
  }

  create(createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }
}
