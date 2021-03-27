import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../reducers";
import {loadCoursesListsAction} from "../../reducers/courses/actions/courses-list.actions";
import {Observable} from "rxjs";
import {getIsAddCourseData} from "../../reducers/courses/selectors/get-list-courses.selectors";
import {AddCoursesModel} from "../../reducers/courses/models/add-courses.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
data$: Observable<any[]>;
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCoursesListsAction());
    this.data$ = this.store.pipe(select(getIsAddCourseData));
    this.data$.subscribe(x => console.log(x))
  }

}
