import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private router: Router = inject(Router);

  public async scrollTo(id: string): Promise<void> {
    if ((id === 'aboutMe' || id === 'skills' || id === 'portfolio') &&
      (this.router.url.includes('imprint') || this.router.url.includes('privacy-policy'))) {
      await this.router.navigate(['']);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
