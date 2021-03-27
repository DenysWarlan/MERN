import {createReducer, on} from '@ngrx/store';
import * as listCoursesActions from "../actions/courses-list.actions";
import {itemOperationStateReducerUtil, listReducerUtil} from "../../common/common.reducer";


export const coursesListFeatureKey = 'coursesList';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(listCoursesActions.loadCoursesListsAction, listReducerUtil.get),
  on(listCoursesActions.loadCoursesListsActionSuccess, listReducerUtil.getSuccess),
  on(listCoursesActions.loadCoursesListsActionFailure, listReducerUtil.getFailure),
  on(listCoursesActions.loadCoursesListsActionClear, listReducerUtil.clear),
);

