import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Studyabroadcountry } from '../../services/models/class.models.js';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-studyabroadcountries',
  templateUrl: './studyabroadcountries.component.html',
  styleUrls: ['./studyabroadcountries.component.scss']
})
export class StudyabroadcountriesComponent implements OnInit {
  studyabroadcountries: Studyabroadcountry[];
  env=[{url:`${environment.apiUrl}`}]
  data: any;


  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadStudyAbroadCountries();
    this.getDestintionlist();

  }


  loadStudyAbroadCountries(){
    return this.dataService.getStudyabroadcoutry()
    .subscribe(data => {this.studyabroadcountries= data
    console.log(data);
    })
  }


  getDestintionlist(){
    this.dataService.getDestinationlist().subscribe(data=>
     {
       this.data=data;
       console.log(data);
     } 
      )
  }

}
