import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // or whatever the actual export name is

bootstrapApplication(App, appConfig);
