import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/Todo';
import { TodoItem } from '../todo-item/todo-item';
import { TodoService } from '../../services/todo.service';
import { Addtodo } from '../addtodo/addtodo';

@Component({
  selector: 'app-todos',
  standalone: true,
  templateUrl: './todos.html',
  imports: [CommonModule, TodoItem, Addtodo],
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  deleteTodo(todo:Todo) {
    this.todos= this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos.push(todo);
    });
  }
}
