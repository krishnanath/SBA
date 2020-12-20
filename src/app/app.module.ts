import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './services/data/data.service';
import { VisacategoriesComponent } from './pages/visacategories/visacategories.component';
import { StudyabroadcountriesComponent } from './pages/studyabroadcountries/studyabroadcountries.component';
import { DestinationComponent } from './pages/studyabroadcountries/destination/destination.component';
import { HomesliderComponent } from './home/homeslider/homeslider.component';
import { VisacategoryComponent } from './pages/visacategories/visacategory/visacategory.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import {ToastrModule} from 'ngx-toastr'; 


@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    VisacategoriesComponent,
    StudyabroadcountriesComponent,
    HomesliderComponent,
    DestinationComponent,
    VisacategoryComponent,
    AboutusComponent,
     
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    FormsModule,
    MarkdownModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass:'toast-bottom-right',
      preventDuplicates:false
    }),
    
   ],
 
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
