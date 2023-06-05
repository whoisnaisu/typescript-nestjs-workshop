import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todo/todos.controller';
import { TodosService } from './todo/todos.service';
import { AnimalController } from './animal/animal.controller';
import { AnimalService } from './animal/animal.service';

@Module({
  imports: [],
  controllers: [AppController, TodosController, AnimalController],
  providers: [AppService, TodosService, AnimalService],
})
export class AppModule {}
