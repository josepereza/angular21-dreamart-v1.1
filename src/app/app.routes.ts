import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import Artist from './components/artist/artist';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'artist',component:Artist}
];
