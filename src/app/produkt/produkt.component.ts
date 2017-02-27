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

  constructor() {
    this.customPlaceholder = "nazwa";
   }

  ngOnInit() {
    this.Produkt = new Produkt(1, 'kubek', 'AGD', 'dobry kubek z afryka');
  }

  onReset(){
    console.log("kliknięty reset");
  }

}
