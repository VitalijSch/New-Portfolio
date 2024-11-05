import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation/translation.service';
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ContactMeService } from '../../services/contact-me/contact-me.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslateModule, ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  public translationService: TranslationService = inject(TranslationService);
  public contactMeService: ContactMeService = inject(ContactMeService);
}
