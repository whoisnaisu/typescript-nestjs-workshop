import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.service';

@Controller('todo')
export class TodoController {
  // inject Service to Controller
  // constructor(private [variable name]: [injectable item]) {}
  constructor(private todoService: TodoService) {}

  @Get()
  findAll(): TodoDTO[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todoDTO: TodoDTO) {
    const result = this.todoService.create(todoDTO);
    return result;
  }
}
