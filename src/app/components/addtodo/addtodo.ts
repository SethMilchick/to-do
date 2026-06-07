import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtodo',
  imports: [FormsModule],
  templateUrl: './addtodo.html',
  styleUrl: './addtodo.scss'
})
export class Addtodo {
  @Output() addTodo = new EventEmitter<any>();
  title: string = '';

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
