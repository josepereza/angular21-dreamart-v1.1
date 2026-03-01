import { Component } from '@angular/core';
interface Review {
  name: string;
  rating: number;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-review',
  imports: [],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Jan Müller',
      rating: 5,
      text: 'Hervorragende Arbeit! Ich bin begeistert von meinem neuen Tattoo. Javier hat meine Vorstellungen perfekt umgesetzt und mich die ganze Zeit begleitet.',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Leonie Baumgartner',
      rating: 4,
      text: 'Professionell, kreativ und sauber! Absolut empfehlenswert. Das Studio ist modern und die Atmosphäre sehr angenehm. Gerne wieder!',
      avatar: 'https://i.pravatar.cc/150?img=45',
    },
    {
      name: 'Christian Koch',
      rating: 5,
      text: 'Ein wahrer Künstler! Detailverliebt und präzise. Mein Tattoo ist ein echtes Kunstwerk geworden. Ich bin seit Jahren Stammkunde.',
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
  ];
    getStars(n: number): number[] { return Array(n).fill(0); }

}
