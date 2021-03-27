import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, first, takeUntil, withLatestFrom} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {State} from "../../reducers";
import {loadRegisters, loadRegistersClear} from "../../reducers/auth/actions/register.actions";
import {getIsAuthErrors, getIsAuthLoading, getIsAuthSuccess} from "../../reducers/auth/selectors/login.selectors";
import {Observable, Subject} from "rxjs";
import {
  getIsRegisterErrors,
  getIsRegisterLoading,
  getIsRegisterSuccess
} from "../../reducers/auth/selectors/register.selectors";
import {setToken} from "../../reducers/auth/actions/setToken.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  charsCount: number = 6;
  isRegisterSuccess$: Observable<boolean>;
  isRegisterLoading$: Observable<boolean>;
  isRegisterErrors$: Observable<any|boolean>;
  private destroyed$: Subject<boolean> = new Subject();
  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isRegisterSuccess$ = this.store.pipe(select(getIsRegisterSuccess));
    this.isRegisterLoading$ = this.store.pipe(select(getIsRegisterLoading));
    this.isRegisterErrors$ = this.store.pipe(select(getIsRegisterErrors));
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.charsCount),
    ])
  });
  }
  ngOnDestroy() {
    this.destroyed$.next(false);
    this.store.dispatch(loadRegistersClear());
  }

  submitForm() {
    const params: any = this.form.value;
    this.store.dispatch(loadRegisters({data: params}));
    this.isRegisterSuccess$.pipe(takeUntil(this.destroyed$)).subscribe(x => {
      if (x) {
        this.router.navigate(['login'])
      }
    });
  }

  login() {
    this.router.navigate(['/login'], {
      relativeTo: this.route,
    });
  }

}
