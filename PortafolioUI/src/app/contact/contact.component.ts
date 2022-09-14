import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../contact-form.service';
import { ContactForm } from '../models/ContactForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: ContactForm = {
    id: '',
    name: '',
    email: '',
    message: '',
    contactDay: ''
  }

  constructor(private contactFormService: ContactFormService) { }

  onSubmit(){
    this.contactFormService.addContactForm(this.contactForm)
    .subscribe(
      response => {
        this.contactForm = {
          id: '',
          name: '',
          email: '',
          message: '',
          contactDay: ''
        }
      }
    )
  }

}
