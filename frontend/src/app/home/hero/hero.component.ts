import { Component, inject } from '@angular/core';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgxFastMarqueeModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public sliderContent: string[] = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Lahr/Schwarzwald',
    'open to work',
  ];

  public scrollService: ScrollService = inject(ScrollService);
}
