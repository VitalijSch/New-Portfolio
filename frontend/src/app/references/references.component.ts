import { Component } from '@angular/core';
import { Review } from '../interfaces/review';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  public currentIndex: number = 1;
  public currentTranslate: string = 'translateX(0%)';
  public reviews: Review[] = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      from: 'lorem'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      from: 'lorem'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      from: 'lorem'
    },
  ]

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    if (this.currentIndex === 0) {
      this.currentTranslate = 'translate(684px)';
    }
    if (this.currentIndex === 1) {
      this.currentTranslate = 'translate(0)';
    }
    if (this.currentIndex === 2) {
      this.currentTranslate = 'translate(-684px)';
    }
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    if (this.currentIndex === 0) {
      this.currentTranslate = 'translate(684px)';
    }
    if (this.currentIndex === 1) {
      this.currentTranslate = 'translate(0)';
    }
    if (this.currentIndex === 2) {
      this.currentTranslate = 'translate(-684px)';
    }
  }
}
