import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task [] =[];
  idx: number = 1;


  //show completed tasks
  getTasks(taskCompleted = true): Task[]{
    return this.tasks.filter( task => task.isCompleted)
  }

  //add tasks
  //find index and add to completed tasks

  //Optional:
  //edit task
  //remove task
}
