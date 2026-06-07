import { Routes } from '@angular/router';
import { Todos } from './components/todos/todos';
import { About } from './components/pages/about/about';

export const routes: Routes = [
  { path: '', component: Todos },
  { path: 'about', component: About }
];
