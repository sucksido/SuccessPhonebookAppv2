import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Contact } from '../service/contact-data';
import { ContactFetch } from '../service/contact-fetch';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html'
})
export class DeleteContactComponent implements OnInit {
  contacts: Contact[];
  contact: ContactFetch;
  displayData: boolean;


  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getContacts();
    this.deleteContact();
  }
 idtodelete=0;
  deleteContact() {

    this.dataservice.deleteContact(this.idtodelete).subscribe(data => {
      this.getContacts();
    });
  }

  getContacts(){
    this.dataservice.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }
}
