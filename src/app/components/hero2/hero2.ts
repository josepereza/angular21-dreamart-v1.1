import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero2',
  standalone: true,
  templateUrl: './hero2.html',
  styleUrl: './hero2.css'
})
export class HeroComponent2 implements OnInit {
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