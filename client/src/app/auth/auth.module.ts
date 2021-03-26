import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {RegisterComponent} from './register/register.component';
import {AppMaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
