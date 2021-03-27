import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromCourses from './courses/reducers/courses.reducer';
import {authFeatureKey} from "./auth/reducers/auth.reducer";


export interface State {
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromCourses.coursesFeatureKey]: fromCourses.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromCourses.coursesFeatureKey]: fromCourses.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const getAuthState = (state: State) => state[authFeatureKey];
export const getIsAuth = createSelector(getAuthState, (state) => state.token)
