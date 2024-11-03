import { Component, inject } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll/scroll.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxFastMarqueeModule, CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public sliderContent: string[] = [
    'hero.profileSummary0',
    'hero.profileSummary1',
    'hero.profileSummary2',
    'hero.profileSummary3',
  ];

  public scrollService: ScrollService = inject(ScrollService);
  public translationService: TranslationService = inject(TranslationService);
}
