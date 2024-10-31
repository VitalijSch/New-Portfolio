import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, NgxFastMarqueeModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public sliderContent: string[] = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Lahr',
    'open to work',
  ];
}
