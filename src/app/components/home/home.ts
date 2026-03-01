import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroComponent2 } from '../hero2/hero2';
import { HeroJavi } from '../hero-javi/hero-javi';
import { ServicesComponent } from '../services-component/services-component';
import { ReviewsComponent } from '../review/review';

@Component({
  selector: 'app-home',
  imports: [HeroJavi,ServicesComponent,ReviewsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
