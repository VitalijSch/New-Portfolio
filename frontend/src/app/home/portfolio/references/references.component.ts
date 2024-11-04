import { Component, HostListener, inject } from '@angular/core';
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

  public ngOnInit(): void {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    this.checkScreenWidth();
  }

  public prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    let baseOffset = this.getBaseOffset();
    this.updateSlidesDynamic(baseOffset);
  }
  
  private getBaseOffset(): number {
    if (window.innerWidth <= 650) {
      return 310;
    } else if (window.innerWidth <= 1000) {
      return 418;
    } else {
      return 684;
    }
  }
  
  private updateSlidesDynamic(baseOffset: number): void {
    const offsets = [
      { previous: baseOffset, current: baseOffset, next: -2 * baseOffset },
      { previous: 0, current: 0, next: 0 },
      { previous: 2 * baseOffset, current: -baseOffset, next: -baseOffset },
    ];
    const currentOffset = offsets[this.currentIndex];
    this.previousTranslate = `translateX(${currentOffset.previous}px)`;
    this.currentTranslate = `translateX(${currentOffset.current}px)`;
    this.nextTranslate = `translateX(${currentOffset.next}px)`;
  }
}
