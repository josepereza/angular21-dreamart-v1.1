import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-javi',
  imports: [],
  templateUrl: './hero-javi.html',
  styleUrl: './hero-javi.css',
})
export class HeroJavi {
 showIntro = signal(true);

  ngOnInit() {
    setTimeout(() => this.showIntro.set(false), 5500);
  }

  skipIntro() {
    this.showIntro.set(false);
  }

  scrollTo(target: string) {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
