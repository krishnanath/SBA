import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VisacategoriesComponent } from './pages/visacategories/visacategories.component';
import { StudyabroadcountriesComponent } from './pages/studyabroadcountries/studyabroadcountries.component';
import { DestinationComponent } from './pages/studyabroadcountries/destination/destination.component';
import { VisacategoryComponent } from './pages/visacategories/visacategory/visacategory.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path: 'visacategories', component:VisacategoriesComponent},
  {path:'studyabroadcountries', component:StudyabroadcountriesComponent},
  {path:'destination/:id', component: DestinationComponent},
  {path:'visacategory/:id', component:VisacategoryComponent},
  {path: 'aboutus',component:AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
