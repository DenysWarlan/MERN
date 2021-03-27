import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {State} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {addCoursesAction} from "../../reducers/courses/actions/add-courses.actions";
import {Observable, Subject} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {
  getIsAddCourseErrors,
  getIsAddCourseLoading,
  getIsAddCourseSuccess
} from "../../reducers/courses/selectors/add-courses.selectors";
import {first, takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isAddCourseSuccess$: Observable<boolean>;
  isAddCourseLoading$: Observable<boolean>;
  isAddCourseErrors$: Observable<HttpErrorResponse>;
  private destroyed$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.isAddCourseSuccess$ = this.store.pipe(select(getIsAddCourseSuccess));
    this.isAddCourseLoading$ = this.store.pipe(select(getIsAddCourseLoading));
    this.isAddCourseErrors$ = this.store.pipe(select(getIsAddCourseErrors));
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.next();
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      urlImg: [null, Validators.required]
    })
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.store.dispatch(addCoursesAction({data: this.form.value}))
    }
    this.isAddCourseSuccess$.pipe(takeUntil(this.destroyed$)).subscribe(success => {
      console.log(success)
      if (success) this.router.navigate(['courses'])
    })
  }
}
