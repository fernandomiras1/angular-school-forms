import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/features/contacts-list/models/contact.model';
import { ContactsService } from 'src/app/features/contacts-list/services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

// inicilizo un modal de tipo Contact con un id: 0 y string ''
public model: Contact = new Contact (0, '', 'assets/default-user.png', []);
// no quiero modificar esta propiedad. Va almacenar todos los valores del enum PhoneTypes.
@ViewChild('contactForm') contactForm: NgForm;

constructor(private contactService: ContactsService) { }

ngOnInit() {
}

addContact() {
  this.contactService.addContact(this.model);
  this.model = new Contact(0, '', 'assets/default-user.png', []);
  this.contactForm.reset();
}

addNewPhoneToModel() {
  this.model.phones.push({type: null, number: null });
}

addImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  // Cargamos la ruta en base 64
  reader.readAsDataURL(file);
  reader.onload = (evt) => {
    //  cuando se pase a base 64 la pasamos al model del objeto
    this.model.picture = String(reader.result);
  };
}
}
