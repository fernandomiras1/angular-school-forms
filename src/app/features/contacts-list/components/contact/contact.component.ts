import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/features/contacts-list/models/contact.model';
import { ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() expanded: boolean = false;
  @Output() clicked: EventEmitter<number> = new EventEmitter();
  // puse el service para hacer el ejemplo del style.background
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {

  }

  onClick(){
    this.clicked.emit(this.contact.id);
  }

}
