import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data/data.service';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Bannerimage, Visacategory } from 'src/app/services/models/class.models';

@Component({
  selector: 'app-visacategory',
  templateUrl: './visacategory.component.html',
  styleUrls: ['./visacategory.component.scss']
})
export class VisacategoryComponent implements OnInit {

  env=[{url:`${environment.apiUrl}`}]
  data: any;
  bannerimagedata: Bannerimage[];
  visacategories: Visacategory[];
    id:any;


  constructor(private dataService:DataService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void{
    this.id=this.route.snapshot.params['id'];
   
   

   
    this.getVisacategory();
    this.getBannerimages();
    this.loadVisaCategories();
   
  }
  getMovie(id: number): any {
    throw new Error("Method not implemented.");
  }


 

  getVisacategory(){
    this.dataService.getVisacategory(this.id).subscribe(data=> {

      this.data=data;
      console.log(data);

    })
  }

  getBannerimages(){
    return this.dataService.getBannerimages()
    .subscribe(data =>{
      this.bannerimagedata = data
    })
  }

  loadVisaCategories(){

    return this.dataService.getVisacategories()
    .subscribe(data => {this.visacategories =data
    console.log(data);
    }

      
      );
  }

  refresh(): void {

    setTimeout(function(){
      window.location.reload();
   },200);

}

  

}
