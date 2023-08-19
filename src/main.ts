import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { MatNativeDateModule } from '@angular/material/core';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
