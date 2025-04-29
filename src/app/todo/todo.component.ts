import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
    Tasks: string[] = []
    newTask = ''

    addTask(){
      if (this.newTask.trim()){
        this.Tasks.push(this.newTask.trim())
        this.newTask =''
      }
    }
    removeTask(index: number){
      this.Tasks.splice(index, 1)
    } 
}
