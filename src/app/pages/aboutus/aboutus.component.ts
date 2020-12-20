import { Component, OnInit } from '@angular/core';
import { Bannerimage, Sbainformation } from 'src/app/services/models/class.models';
import {environment} from '../../../environments/environment';
import {DataService} from '../../services/data/data.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  env=[{url:`${environment.apiUrl}`}]
  bannerimagedata: Bannerimage[];
  aboutus: Sbainformation;
  data: Object;


  constructor(private dataService:DataService) { }

  ngOnInit(){
    this.getBannerimages();
    this.loadSbainformation();



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
