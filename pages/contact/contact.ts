import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class ContactPage {
  heightFeet: number;
  heightInches: number;
  heightToIn: number;
  gender: string;
  idealWeight: number;
  totalHeight: number;
  overFive: number;
  idealWeightR: number; 
  idealWeightM: number;
  idealWeightH: number;
  idealWeightD: number;

  constructor(public navCtrl: NavController) {

  }
calculateIdealWeight(){
  this.heightToIn = this.heightFeet*12
  this.totalHeight = +this.heightInches+(+this.heightToIn);
  this.overFive = this.totalHeight-60;

  if (this.gender == "m"){
    this.idealWeightR = Math.round(52+(1.9*this.overFive));
    this.idealWeightM = Math.round(56.2+(1.41*this.overFive));
    this.idealWeightH = Math.round(48.0+(2.7*this.overFive));
    this.idealWeightD = Math.round(50.0+(2.3*this.overFive));
  } else if (this.gender == "f"){
    this.idealWeightR = Math.round(49+(1.7*this.overFive));
    this.idealWeightM = Math.round(53.1+(1.36*this.overFive));
    this.idealWeightH = Math.round(45.5+(2.2*this.overFive));
    this.idealWeightD = Math.round(45.5+(2.3*this.overFive));
  }
}
  




}
