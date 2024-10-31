import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
