/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {

  constructor(
      private taskService: TaskService
  ) { }

  @Get()
  async getAll() {
      return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
      return this.taskService.getById(id);
  }

  @Post()
  async create(@Body() task: Task): Promise<Task> {
      return this.taskService.create(task);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
      return this.taskService.update(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
      return this.taskService.delete(id);
  }
}
