import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/post';
import { NavigateService } from '../../services/navigate/navigate.service';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation/translation.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  public messageSend: boolean = false;
  public isChecked: boolean = false;
  public showIsCheckedError: boolean = false;
  public messageForm: FormGroup;

  private post: Post = {
    endPoint: 'https://vitalij-schwab.com/sendmail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  public navigateService: NavigateService = inject(NavigateService);
  public translationService: TranslationService = inject(TranslationService);
  private translate: TranslateService = inject(TranslateService);

  private fb: FormBuilder = inject(FormBuilder);
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]
      ],
      message: ['', Validators.required],
    });
  }

  public sendMessage(): void {
    if (this.messageForm.valid && !this.isChecked) {
      this.showIsCheckedError = true;
    }
    if (this.messageForm.valid && this.isChecked) {
      this.showIsCheckedError = false;
      this.postMessage();
    }
  }

  private postMessage(): void {
    this.http.post(this.post.endPoint, this.post.body(this.messageForm.value))
      .subscribe({
        next: (response) => {
          this.messageForm.reset();
          this.isChecked = false;
          this.showMessage();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  private showMessage(): void {
    this.messageSend = true;
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      document.body.style.overflowY = 'unset';
      this.messageSend = false;
    }, 3000);
  }

  public toggleIsChecked(): void {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showIsCheckedError = false;
    }
  }

  get placeholderName(): string {
    if (this.messageForm.get('name')?.invalid && this.messageForm.get('name')?.touched) {
      return this.translate.instant('contactMe.errorMessageName');
    }
    return this.translate.instant('contactMe.placeholder0');
  }

  get placeholderEmail(): string {
    if (this.messageForm.get('email')?.invalid && this.messageForm.get('email')?.touched) {
      return this.translate.instant('contactMe.errorMessageEmail');
    }
    return 'youremail@email.com';
  }

  get placeholderMessage(): string {
    if (this.messageForm.get('message')?.invalid && this.messageForm.get('message')?.touched) {
      return this.translate.instant('contactMe.errorMessageMessage');
    }
    return this.translate.instant('contactMe.placeholder1');
  }
}
