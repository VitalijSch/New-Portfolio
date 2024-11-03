import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../interfaces/review';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
      text: 'projects.content0',
      from: 'Bogdan G.'
    },
    {
      text: 'projects.content1',
      from: 'Dennis B.'
    },
    {
      text: 'projects.content2',
      from: 'Benedikt M.'
    },
  ];

  public translationService: TranslationService = inject(TranslationService);

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
