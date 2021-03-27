import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from '../reducers/courses.reducer';

export const selectCoursesState = createFeatureSelector<fromCourses.State>(
  fromCourses.coursesFeatureKey
);
