import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  public messageSend: boolean = false;
}
