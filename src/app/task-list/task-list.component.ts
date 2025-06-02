import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngFor

@Component({
  selector: 'app-task-list',
  standalone: true, // ✅ Required for standalone components
  imports: [CommonModule], // ✅ Fixes *ngFor error
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: string[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteTask(index: number) {
    this.delete.emit(index);
  }
}
