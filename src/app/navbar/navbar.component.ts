import { Component, OnInit } from '@angular/core';
import '../../assets/js/script.js';
import { DataService } from '../services/data/data.service';
import { Studyabroadcountry,Visacategory ,Sbainformation} from '../services/models/class.models.js';
import {environment} from '../../environments/environment';

declare var globalstyle: any;
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  studyabroadcountries: Studyabroadcountry[];
  Sbainformation: any;

  env=[{url:`${environment.apiUrl}`}]


  constructor(private dataService:DataService) { }

  ngOnInit() {
    globalstyle();

//  this.megamenu();
 this.loadStudyAbroadCountries();
 this.loadSbainformation();


  }

  megamenu(){
    // $(document).on('hover', '.dropdown-menu', function (e) {
    //   e.stopPropagation();
    // });

  $(document).ready(function(){

    $('.largescreennav').hover(
  
      function(){
      $('.megamenu').show();
      },
   
    function(){
      $('.megamenu').hide();
    },

    )

    // $('.megamenu').hover(
    //   function(){
    //     $('.megamenu').show();
    //   },
    // )



  })
   


  }

 
  loadStudyAbroadCountries(){
    return this.dataService.getStudyabroadcoutry()
    .subscribe(data => {this.studyabroadcountries= data
    console.log(data);
    })
  }

  refresh(): void {

    setTimeout(function(){
      window.location.reload();
   },200);

}

loadSbainformation(){
  return this.dataService.getSbainformation()
  .subscribe(data => {
    this.Sbainformation= data
    console.log(data);
  })
}

}
