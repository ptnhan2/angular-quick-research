import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from '../task-list/task-list';
import { signal, Signal, computed } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';

interface ITodo{
  id: number;
  description: string;
  done: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskList, MatButtonModule, 
    MatCardModule, MatIconModule, FormsModule, 
    MatInputModule, MatFormFieldModule, MatListModule,
    MatCheckboxModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'todo-with-angular';
  todoList: Signal<ITodo[]> = signal([]);
  description = '';
  value = 'Clear me';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
readonly checked = model(false);
  readonly indeterminate = model(false);
  addTask(): void {
    console.log("run addTask");
    if(this.description==''){
      return;
    }
    const newTask: ITodo = {
      id: this.todoList().length + 1,
      description: this.description,
      done: false
    }
    this.todoList().push(newTask);
    this.description = '';
    console.log("task list: ", this.todoList().length);
  }
  
}
