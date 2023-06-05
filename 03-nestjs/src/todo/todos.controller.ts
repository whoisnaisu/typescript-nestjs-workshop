import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo, TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() createTodoDTO: CreateTodoDTO): Todo[] {
    return this.todoService.create(createTodoDTO);
  }
}

// GET http://localhost/todos/ -> findAll()
// POST http://localhost/todos/ -> create()
