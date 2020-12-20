import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


import { Sbainformation } from "../models/Sbainformation.model";
import {environment } from '../../../environments/environment';
  import {  Visacategory, Studyabroadcountry, Destination, University, Bannerimage } from '../models/class.models';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // apiUrl= 'http://localhost:1337/';

  constructor(private _http:HttpClient) { }

  // getSbainformations(){
  //   return this._http.get<Sbainformation[]>(`${environment.apiUrl}`+"sbainformations");
  // }

// getVisacategories(){
//   return this._http.get<Visacategory[]>(`${environment.apiUrl}`+"visacategories")
// }
getVisacategories():Observable<any>{
  return  this._http.get<Visacategory[]>(`${environment.apiUrl}`+"/visacategories")
  .pipe(map(data => data))

}

getStudyabroadcoutry():Observable<any>{
  return this._http.get<Studyabroadcountry[]>(`${environment.apiUrl}`+"/study-abroad-countries")
  .pipe(map(data=> data))
}

getSbainformation():Observable<any>{
  return this._http.get<Sbainformation[]>(`${environment.apiUrl}`+'/sbainfo')
  .pipe(map(data =>data))
}




getUniversity():Observable<any>{
  return this._http.get<University[]>(`${environment.apiUrl}`+'/university-lists')
  .pipe(map(data => data))
}

 getDestination(id){
   return this._http.get(`${environment.apiUrl}`+'/study-abroad-countries/'+id).pipe(map(data => data))

 }


 getDestinationlist(){
  return this._http.get(`${environment.apiUrl}`+'/study-abroad-countries/').pipe(map(data => data))

 }

 getVisacategory(id){
return this._http.get(`${environment.apiUrl}`+'/visacategories/'+id).pipe(map(data => data ))
 }
 getHomeslider(){
   return this._http.get(`${environment.apiUrl}`+'/home-banner-sliders').pipe(map(data => data))
 }
 getBannerimages():Observable<any>{
  return this._http.get<Bannerimage[]>(`${environment.apiUrl}`+'/banner-images')
  .pipe(map(data => data))
 }



}
