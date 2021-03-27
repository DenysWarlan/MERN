import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, switchMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as CoursesActions from '../actions/courses.actions';
import * as AddCoursesActions from '../actions/add-courses.actions';
import * as ListCoursesActions from '../actions/courses-list.actions';
import {CoursesServices} from "../services/courses.services";
import {HttpErrorResponse} from "@angular/common/http";


@Injectable()
export class CoursesEffects {

  loadCoursess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(CoursesActions.loadCoursess),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CoursesActions.loadCoursessSuccess({ data })),
          catchError(error => of(CoursesActions.loadCoursessFailure({ error }))))
      )
    );
  });
  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddCoursesActions.addCoursesAction),
      map((action) => action.data),
      switchMap((payload) =>
      this.service.addCourses(payload).pipe(
        map((res: any) => AddCoursesActions.addCoursesActionSuccess({data: res})
        ),
        catchError((error: HttpErrorResponse) => of(AddCoursesActions.addCoursesActionFailure({error})))
      )
      )
    )
  })
  getListCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ListCoursesActions.loadCoursesListsAction),
      switchMap((payload) =>
      this.service.getList().pipe(
        map((res: any) => ListCoursesActions.loadCoursesListsActionSuccess({data: res})
        ),
        catchError((error: HttpErrorResponse) => of(ListCoursesActions.loadCoursesListsActionFailure({error})))
      )
      )
    )
  })



  constructor(private actions$: Actions, private service: CoursesServices) {}

}
