import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideLottieOptions } from 'ngx-lottie';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
  ]
};
