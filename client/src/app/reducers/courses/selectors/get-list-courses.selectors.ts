import {createSelector} from '@ngrx/store';
import {addCoursesFeatureKey} from '../reducers/add-courses.reducer';
import {selectCoursesState} from "./courses.selectors";
import * as _ from "lodash";
import {coursesListFeatureKey} from "../reducers/courses-list.reducer";


export const selectAddCoursesState = createSelector(selectCoursesState, (state) => state[coursesListFeatureKey]);

export const getIsAddCourseSuccess = createSelector(selectAddCoursesState, (state) => _.get(state, 'success', false))
export const getIsAddCourseLoading = createSelector(selectAddCoursesState, (state) => _.get(state, 'loading', false))
export const getIsAddCourseErrors = createSelector(selectAddCoursesState, (state) => _.get(state, 'errors', false))
export const getIsAddCourseData = createSelector(selectAddCoursesState, (state) => _.get(state, 'res', []))
