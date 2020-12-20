import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import { Visacategory, Bannerimage} from '../../services/models/class.models.js';
import {environment} from '../../../environments/environment';

 
@Component({
  selector: 'app-visacategories',
  templateUrl: './visacategories.component.html',
  styleUrls: ['./visacategories.component.scss']
})
export class VisacategoriesComponent implements OnInit {
  visacategories: Visacategory[];
  bannerimagedata: Bannerimage[];

  env=[{url:`${environment.apiUrl}`}]
  data: any;



  constructor(private dataService:DataService) { }

  ngOnInit()  {

    this.loadVisaCategories();
       
    this.getBannerimages();

  }




  loadVisaCategories(){

    return this.dataService.getVisacategories()
    .subscribe(data => {this.visacategories =data
    console.log(data);
    }

      
      );
  }

 
  getBannerimages(){
    return this.dataService.getBannerimages()
    .subscribe(data =>{
      this.bannerimagedata = data
    })
  }


}
