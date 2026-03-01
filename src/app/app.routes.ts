import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import Artist from './components/artist/artist';

export const routes: Routes = [
  { path: '', component: Home },
 
  { path: 'artist',component:Artist},
   { path: '**', redirectTo: '', pathMatch: 'full' }
];
