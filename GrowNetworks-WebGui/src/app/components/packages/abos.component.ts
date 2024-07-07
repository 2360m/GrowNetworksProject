import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RadioButtonModule} from "primeng/radiobutton";
import {DecimalPipe, formatDate, formatNumber, NgClass, NgStyle} from "@angular/common";
import {Abonnements} from "../../models/abonnements";
import {Button} from "primeng/button";
import {InputSwitchModule} from "primeng/inputswitch";
import {InstagramService} from "../../services/instagram.service";
import {HttpClientModule} from "@angular/common/http";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-abos',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, NgStyle, DecimalPipe, NgClass, Button, InputSwitchModule, HttpClientModule, InputTextModule],
  providers:[InstagramService],
  templateUrl: './abos.component.html',
  styleUrl: './abos.component.scss'
})
export class AbosComponent implements OnInit{
  radioButtonState:string='';
  isOn!:boolean
  style1: boolean= true;
  style2: boolean= false;
  Abos:Abonnements[]=[];
  username: string = '';
  userInfo: any = null;



  constructor(private instagramService: InstagramService) {
  }

  ngOnInit() {
    this.radioButtonState='Monat';
    this.Abos=[
      {id:1, name:'SOCIABLE PREMIUM',preis: 50,
        description:['Follower Growth Within 24 hours','Guaranteed Results Or Its Free','Advanced AI Targeting',
          'Obtaining blue badge certification','Hands Off For You','3000 -5000 followers monthly','1000- 2500 likes /Mo','Engaged, Organic Followers']},
      {id:2, name:'SOCIABLE PRO',preis: 50,description:['Follower Growth Within 24 hours','Advanced AI Targeting','Hands Off For You','2000 -3000 followers monthly','750- 2000 likes /Mo','','','']},
      {id:3, name:'SOCIABLE LIGHT',preis: 50, description: ['Follower Growth Within 24 hours','Hands Off For You','1500 -2500 followers monthly','250- 1500 likes /Mo','','','','']}
    ]
  }

  onClickVersNrRadioBtnSelectionChanged(element:any){
    this.radioButtonState=''

    if(element.value=='Monat'){
      this.radioButtonState='Monat'
    }
    if(element.value=='viertelJahr'){
      this.radioButtonState='viertelJahr'
    }
    console.log(this.radioButtonState)

  }

  selectAbo(abo:Abonnements){

  }
  check(element:any){
    console.log(this.radioButtonState)

    if(element.modelValue==true){
      this.radioButtonState='viertelJahr'
    }
    if(element.modelValue==false){
      this.radioButtonState='Monat'
    }
    console.log(element.modelValue, "element....")
  }

  trackByDescription(index: number, item: any): any {
    return index; // Assuming descriptions are unique within their array
  }

  onSearch() {
    if (this.username) {
      this.instagramService.getUserInfo(this.username).subscribe(
        (data: any) => {
          console.log(data)
          this.userInfo = data;
          console.log('User info:', this.userInfo);
        },
        (error: any) => {
          console.error('Error fetching user info', error);
          this.userInfo = null;
        }
      );
    }
  }

}
