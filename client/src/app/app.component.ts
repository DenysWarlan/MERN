import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getIsAuth, State} from "./reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library';
  isAuth$: Observable<any>;

  constructor(
    private store: Store<State>,
  ) {
  }

  ngOnInit() {
    this.isAuth$ = this.store.pipe(select(getIsAuth));
  }
}
