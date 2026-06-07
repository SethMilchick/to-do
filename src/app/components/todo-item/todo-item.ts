import {Component, Input, inject, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  @Input() todo!: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>()
  private todoService = inject(TodoService);

  //Set dynamic classes
  setClasses() {
    let classes = {
      'todo': true,
      'is-completed': this.todo.completed,
    }
    return classes;
  }

  onToggle() {
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleCompleted(this.todo).subscribe((todo: Todo) => console.log(todo));
  }

  onDelete() {
    this.deleteTodo.emit(this.todo);
  }
}
