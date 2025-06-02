import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-to-do-app',
  imports: [FormsModule,CommonModule,TaskListComponent], 
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.css'
})
export class ToDoAppComponent {
  //  newTask: string = '';
  // tasks: string[] = [];

  // addTask() {
  //   if (this.newTask.trim()) {
  //     this.tasks.push(this.newTask.trim());
  //     this.newTask = ''; // clear input
  //   }
  // }

  // deleteTask(index: number) {
  //   this.tasks.splice(index, 1);
  // }

  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
