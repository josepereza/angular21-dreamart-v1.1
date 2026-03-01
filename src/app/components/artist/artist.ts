import { Component } from '@angular/core';
interface Timeline {
  period: string;
  title: string;
  subtitle?: string;
  description: string;
  type: 'experience' | 'education';
}
@Component({
  selector: 'app-artist',
  imports: [],
  templateUrl: './artist.html',
  styleUrl: './artist.css',
})
export default class Artist {
timeline: Timeline[] = [
    {
      period: '2021 - Present',
      title: 'DREAM ART TATTOO STUDIO',
      description: 'Nun ist der richtige Zeitpunkt gekommen, eigene Wege einzuschlagen und meine Kunst den Leuten näher zu bringen welche ein Faible für aussergewöhnliche Werke haben und stolz sind ein authentisches und einzigartiges Kunstwerk auf der Haut zu haben. Gerne begrüsse ich euch in meinem Tattoo Studio an der Seestrasse 12A in 8610 Uster.',
      type: 'experience'
    },
    {
      period: '2010 - 2011',
      title: 'MASTER OF ARTS',
      subtitle: '(UNIVERSITÄT PUERTO REAL)',
      description: 'Um mich weiterzubilden, absolvierte ich zudem einen Master als Kunstlehrer (Niveau Sekundarschule, Gymnasium) an der Universität in Puerto Real (ES).',
      type: 'education'
    },
    {
      period: '2005 - 2010',
      title: 'BACHELOR OF FINE ARTS',
      subtitle: '(UNIVERSITÄT SEVILLA)',
      description: 'Meine künstlerische Ausbildung begann an der Universität von Sevilla, wo ich einen Bachelor in Fine Arts absolvierte und meine Leidenschaft für Kunst vertiefte.',
      type: 'education'
    }
  ];
}
