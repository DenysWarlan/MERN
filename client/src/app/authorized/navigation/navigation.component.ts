import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {State} from "../../reducers";
import {Store} from "@ngrx/store";
import {clearToken} from "../../reducers/auth/actions/setToken.actions";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private store: Store<State>) { }

  ngOnInit(): void {
  }
  logOut() {
    localStorage.clear();
    this.store.dispatch(clearToken({data: ''}))
    this.router.navigate(['login']);

  }
}
