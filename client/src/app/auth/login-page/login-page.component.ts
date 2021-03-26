import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {State} from "../../reducers";
import {loadLogins} from "../../reducers/auth/actions/login.actions";
import {getIsAuthErrors, getIsAuthLoading, getIsAuthSuccess} from "../../reducers/auth/selectors/auth.selectors"
import {HttpErrorResponse} from "@angular/common/http";
import {takeUntil} from "rxjs/operators";
import {setToken} from "../../reducers/auth/actions/setToken.actions";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  charsCount = 6;
  form!: FormGroup;
  isAuthSuccess$: Observable<boolean>;
  isAuthLoading$: Observable<boolean>;
  isAuthErrors$: Observable<any|boolean>;
  private destroyed$: Subject<boolean> = new Subject();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {}
  ngOnInit() {
    this.isAuthSuccess$ = this.store.pipe(select(getIsAuthSuccess));
    this.isAuthLoading$ = this.store.pipe(select(getIsAuthLoading));
    this.isAuthErrors$ = this.store.pipe(select(getIsAuthErrors));
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.charsCount),
      ]),
    });
  }
ngOnDestroy() {
  this.destroyed$.next(false);
}

  loginUser() {
    const params: any = this.form.value;
    this.store.dispatch(loadLogins({data: params}));
    this.isAuthSuccess$.pipe(takeUntil(this.destroyed$)).subscribe(x => {
      if (x) {
        this.store.dispatch(setToken({data: localStorage.getItem('token')}))
        this.router.navigate(['home'])
      }
    });
  }
}
