import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {HomeComponent} from "./home/home.component";
import {NavigationComponent} from "./navigation/navigation.component";
import { CoursesComponent } from './courses/courses.component';
import { LinksComponent } from './links/links.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import {AppMaterialModule} from "../material.module";

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    CoursesComponent,
    LinksComponent,
    AddCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    NavigationComponent
  ],
  bootstrap: []
})
export class AuthorizedModule { }
