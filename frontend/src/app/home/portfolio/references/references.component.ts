import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../interfaces/review';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  public currentIndex: number = 1;
  public previousTranslate: string = 'translateX(0)';
  public currentTranslate: string = 'translateX(0)';
  public nextTranslate: string = 'translateX(0)';
  public reviews: Review[] = [
    {
      text: 'Du hast während deiner Umschulung gezeigt, wie gut du im Team arbeitest. Deine Ideen für die Frontend-Struktur haben unser Projekt effizienter gemacht, und du warst immer bereit, Feedback anzunehmen und Verbesserungen umzusetzen. Die Zusammenarbeit mit dir hat unser Team enorm vorangebracht!',
      from: 'Bogdan G.'
    },
    {
      text: 'Dein Einsatz in unserem Projekt war eine echte Bereicherung. Du hast nicht nur deine Aufgaben super gemeistert, sondern auch anderen geholfen, ihre Module optimal ins Gesamtsystem einzufügen. Deine Bereitschaft, Wissen zu teilen und zu unterstützen, hat die Teamarbeit echt gestärkt.',
      from: 'Dennis B.'
    },
    {
      text: 'Deine Hilfsbereitschaft und dein Engagement sind mir besonders aufgefallen. Du hast es geschafft, auch komplexe Themen verständlich zu erklären und anderen im Team zu helfen, wenn sie nicht weiterkamen. Deine offene Art und deine technischen Kenntnisse haben eine echte Teamkultur geschaffen.',
      from: 'Benedikt M.'
    },
  ];

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    this.updateSlides();
  }

  public prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.updateSlides();
  }

  private updateSlides(): void {
    if (this.currentIndex === 0) {
      this.previousTranslate = 'translateX(684px)';
      this.currentTranslate = 'translateX(684px)';
      this.nextTranslate = 'translateX(-1368px)';
    }
    if (this.currentIndex === 1) {
      this.previousTranslate = 'translateX(0)';
      this.currentTranslate = 'translateX(0)';
      this.nextTranslate = 'translateX(0)';
    }
    if (this.currentIndex === 2) {
      this.previousTranslate = 'translateX(1368px)';
      this.currentTranslate = 'translateX(-684px)';
      this.nextTranslate = 'translateX(-684px)';
    }
  }
}
