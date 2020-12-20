import { Component, OnInit } from '@angular/core';
import '../../assets/js/script.js';
import {environment} from '../../environments/environment';

import {DataService} from '../services/data/data.service';
import { Bannerimage, Sbainformation } from 'src/app/services/models/class.models';

declare var globalstyle: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  env=[{url:`${environment.apiUrl}`}]
  aboutus: Sbainformation;
  bannerimagedata: Bannerimage[];


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getBannerimages();
    this.loadSbainformation();

    globalstyle();
  }



  getBannerimages(){
    return this.dataService.getBannerimages()
    .subscribe(data =>{
      this.bannerimagedata = data
    })
  }


  loadSbainformation(){
    return this.dataService.getSbainformation()
    .subscribe(data => {
      this.aboutus= data
      console.log(data);
    })
  }

}
