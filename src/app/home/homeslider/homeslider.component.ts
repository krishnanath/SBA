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
  banner = [
    {
      img:
        'https://edabroad.in/wp-content/uploads/2018/07/study-in-canada-consultants-in-cochin-kerala-edabroad.in_.jpg',
      title: 'Study in CANADA',
      description: 'iamthe greatest'
    },
    {
      img:
        'https://edabroad.in/wp-content/uploads/2018/07/study-in-newzealand-consultants-in-cochin-kerala-edabroad.in_.jpg',
      title: 'Study in New Zealand',
      description: 'GodISinme'
    },
    {
      img: 'https://edabroad.in/wp-content/uploads/2018/04/banner23.jpg',
      title: 'Study in europe',
      description: 'Iamthegreatest'
    }
  ];
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
