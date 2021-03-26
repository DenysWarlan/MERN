import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, first, withLatestFrom} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../reducers";
import {loadRegisters} from "../../reducers/auth/actions/register.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  charsCount: number = 6;
  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(this.charsCount),
    ])
  });
  }

  submitForm() {
    const params: any = this.form.value;
    this.store.dispatch(loadRegisters({data: params}));
  }

  login() {
    this.router.navigate(['/login'], {
      relativeTo: this.route,
    });
  }

}
