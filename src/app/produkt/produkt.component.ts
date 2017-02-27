import { Component, OnInit } from '@angular/core';
import { Produkt } from './produkt';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {

  Produkt: Produkt;
  customPlaceholder: string;
  categories: string[];

  constructor() {
    this.categories = ["kategoria1", "kategoria2", "trzecia kategoria", "siedemnasta kategoria", "nie trzecia kategoria", "AGD"];
    this.customPlaceholder = "nazwa";
   }

  ngOnInit() {
    this.Produkt = new Produkt(1, 'kubek', 'AGD', 'dobry kubek z afryka');
  }

  onReset(){
    console.log("kliknięty reset");
  }

}
