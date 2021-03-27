import { Action, createReducer, on } from '@ngrx/store';
import * as AddCoursesActions from '../actions/add-courses.actions';
import {itemOperationStateReducerUtil} from "../../common/common.reducer";

export const addCoursesFeatureKey = 'addCourses';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,
  on(AddCoursesActions.addCoursesAction, itemOperationStateReducerUtil.request),
  on(AddCoursesActions.addCoursesActionSuccess, itemOperationStateReducerUtil.requestSuccess),
  on(AddCoursesActions.addCoursesActionFailure, itemOperationStateReducerUtil.requestFailure),
  on(AddCoursesActions.addCoursesActionClear, itemOperationStateReducerUtil.clear),

);

