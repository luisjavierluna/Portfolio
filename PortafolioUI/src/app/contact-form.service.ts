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
    return this.http.post<ContactForm>(this.baseUrl, contactForm);
  }
}
