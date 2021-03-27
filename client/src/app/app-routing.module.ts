import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./reducers/auth/guards/auth.guard";
import {HomeComponent} from "./authorized/home/home.component";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {RegisterComponent} from "./auth/register/register.component";
import {PageNotFoundComponent} from "./authorized/page-not-found/page-not-found.component";
import {CoursesComponent} from "./authorized/courses/courses.component";
import {LinksComponent} from "./authorized/links/links.component";
import {AddCoursesComponent} from "./authorized/add-courses/add-courses.component";

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'courses', canActivate: [AuthGuard], component: CoursesComponent },
  { path: 'add', canActivate: [AuthGuard], component: AddCoursesComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
