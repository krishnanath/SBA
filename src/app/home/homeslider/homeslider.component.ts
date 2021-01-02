import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';

import '../../../assets/js/script.js';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
declare var globalstyle: any;

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.scss']
})
export class HomesliderComponent implements OnInit {
 
  data: any;
 
  env=[{url:`${environment.apiUrl}`}]


  constructor(private dataService:DataService) {}

  ngOnInit(){
    globalstyle();
    this.getHomeslider();
  }

  getHomeslider(){
    this.dataService.getHomeslider().subscribe(data=>
     {
       this.data=data;
       console.log(data);
     } 
      )
  }

}
