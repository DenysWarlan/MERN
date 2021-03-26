import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {RouterModule} from "@angular/router";
import {PageNotFoundComponent} from './authorized/page-not-found/page-not-found.component';
import {AuthorizedModule} from "./authorized/authorized.module";
import {AppReducersModule} from "./reducers/app-reducers.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    AuthorizedModule,
    AppReducersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
