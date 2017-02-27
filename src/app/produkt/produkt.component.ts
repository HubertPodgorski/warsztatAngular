import { Component, OnInit } from '@angular/core';
import { Produkt } from './produkt';
import { Category } from './produkt';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {

  Produkt: Produkt;
  customPlaceholder: string;
  categories: Category[];

  constructor() {
    this.categories = [
      {
        id: 1,
        name: "wartość"
      },
      {
        id: 2,
        name: "KATEGORIA 2"
      },
      {
        id: 3,
        name: "AGD"
      },
    ];
    this.customPlaceholder = "nazwa";
   }

  ngOnInit() {
    this.Produkt = new Produkt(1, null, {
        id: 3,
        name: "AGD"}, 'dobry kubek z afryka');
  }

  onReset(){
    console.log("kliknięty reset");
  }

  onSubmit(form){
    console.log(form.value, "form.value");
    console.log(form.valid, "form.valid");
  }

}
