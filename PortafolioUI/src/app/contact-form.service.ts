import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactForm } from './models/ContactForm';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  baseUrl = 'https://localhost:7271/api/ContactForms'

  constructor(private http: HttpClient) { }

  addContactForm(contactForm: ContactForm): Observable<ContactForm>{
    contactForm.id = 'B4243256-48EE-4AFE-AF76-70566A27E652';
    contactForm.contactDay = '2022-09-14';
    return this.http.post<ContactForm>(this.baseUrl, contactForm);
  }
}
