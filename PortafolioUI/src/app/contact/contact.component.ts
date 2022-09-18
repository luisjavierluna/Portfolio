import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../contact-form.service';
import { ContactForm } from '../models/ContactForm';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private contactFormService: ContactFormService, private formBuilder: FormBuilder) { }
  
  form: FormGroup = this.formBuilder.group({})
  
  contactForm: ContactForm = {
    id: '',
    name: '',
    email: '',
    message: '',
    contactDay: ''
  }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      email: ['', {
        validators: [Validators.required]
      }],
      message: ['', {
        validators: [Validators.required]
      }]
    })
  }
  
  onSubmit(){

    this.contactForm = {
      id: '',
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
      contactDay: ''
    }

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

  getErrorFieldName(){
    var fieldName = this.form.get('name');
    
    if(fieldName?.hasError('required')){
      return 'The field name is required'
    }
    return '';
  }

  getErrorFieldEmail(){
    var fieldEmail = this.form.get('name');
    
    if(fieldEmail?.hasError('required')){
      return 'The field email is required'
    }
    return '';
  }

  getErrorFieldMessage(){
    var fieldMessage = this.form.get('name');
    
    if(fieldMessage?.hasError('required')){
      return 'The field message is required'
    }
    return '';
  }
}
