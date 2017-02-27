import { Component, OnInit } from '@angular/core';
import { Address, Company, User } from './user';

@Component({
  selector: 'app-uzytkownik',
  templateUrl: './uzytkownik.component.html',
  styleUrls: ['./uzytkownik.component.css']
})
export class UzytkownikComponent implements OnInit {

  user: User;

  constructor() {
      this.user = new User(
        null, 
        null, 
        null, 
        null, 
        {street: null, suite: null, city: null, zipcode: null, geo: { lat: null, lng: null}}, 
        {name: null, catchPhrase: null, bs: null}, null, null);
   }

  ngOnInit() {
  }

  submitForm(){
    console.log("zapisuje");
  }

  resetForm(userForm){
    userForm.reset();
    console.log("resetuje");
  }

}
