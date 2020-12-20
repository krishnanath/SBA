import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Destination, University, Sbainformation } from '../../../services/models/class.models.js';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import '../../../../assets/js/jstoggletap.js';

declare var toggletab: any;


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  
  studyabroadcountries: Destination[]; 
  universities:University[];
  env=[{url:`${environment.apiUrl}`}]
  id: any;
  data: any;
  aboutus: Sbainformation;


  constructor(private dataService:DataService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.getDestintion();
    this.loadUniversity();
    this.loadSbainformation();

    toggletab();
   
  }

  loadUniversity(){
    return this.dataService.getUniversity()
    .subscribe(data => {this.universities= data
    console.log(data);
    })
  } 


  getDestintion(){
    this.dataService.getDestination(this.id).subscribe(data=>
     {
       this.data=data;
       console.log(data);
     } 
      )
  }

  loadSbainformation(){
    return this.dataService.getSbainformation()
    .subscribe(data => {
      this.aboutus= data
      console.log(data);
    })
  }
}
