import {combineReducers} from '@ngrx/store';
import * as addCoursesReducer from './add-courses.reducer';
import * as listCoursesReducer from './courses-list.reducer';

export const coursesFeatureKey = 'courses';

export interface State {
  [addCoursesReducer.addCoursesFeatureKey]:addCoursesReducer.State,
  [listCoursesReducer.coursesListFeatureKey]:listCoursesReducer.State,
}

export const initialState: State = {
  [addCoursesReducer.addCoursesFeatureKey]:addCoursesReducer.initialState,
  [listCoursesReducer.coursesListFeatureKey]:listCoursesReducer.initialState,
};


export const reducer = combineReducers<State>(
  {
    [addCoursesReducer.addCoursesFeatureKey]:addCoursesReducer.reducer,
    [listCoursesReducer.coursesListFeatureKey]:listCoursesReducer.reducer,
  },
  initialState
);

