import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,  //standalone
  imports: [CommonModule, FormsModule], 
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'] 
})

export class TodoComponent {
  newTask: string = '';
  tasks: { task: string; completed: boolean }[] = [];

  addTask() {
    const trimmed = this.newTask.trim();
    if (trimmed) {
      this.tasks.push({ task: trimmed, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  markAll() {
    const allCompleted = this.tasks.every(task => task.completed);

    if (allCompleted) {
      this.tasks.forEach(task => (task.completed = false));
    } 
    else {
      this.tasks.forEach(task => (task.completed = true));
    }
  }

  clearAll() {
    this.tasks = [];
    this.newTask = '';
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
