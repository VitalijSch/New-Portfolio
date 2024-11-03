import { Component, inject } from '@angular/core';
import { ScrollService } from '../services/scroll/scroll.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  private scrollService: ScrollService = inject(ScrollService);

  public ngOnInit(): void {
    this.scrollService.scrollTo('header');
  }
}
