import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {HomeComponent} from "./home/home.component";
import {NavigationComponent} from "./navigation/navigation.component";
import { CreatePageComponent } from './create-page/create-page.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    CreatePageComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    NavigationComponent
  ],
  bootstrap: []
})
export class AuthorizedModule { }
