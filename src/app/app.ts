import { Component, signal } from '@angular/core';
import {Todos} from './components/todos/todos';
import {Header} from './components/layout/header/header';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Todos, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ToDo List');
}
