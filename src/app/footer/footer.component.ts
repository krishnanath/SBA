import { Component, OnInit } from '@angular/core';
import '../../assets/js/script.js';
import { DataService } from '../services/data/data.service';
 import { Sbainformation } from '../services/models/Sbainformation.model.js';

declare var globalstyle: any;
 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  Sbainformation: any;


  constructor(private dataService:DataService) { }

  ngOnInit() {
    globalstyle();
    this.loadSbainformation();

  }

  loadSbainformation(){
    return this.dataService.getSbainformation()
    .subscribe(data => {
      this.Sbainformation= data
      console.log(data);
    })
  }

}
