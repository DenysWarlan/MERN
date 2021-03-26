import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import {loginFeatureKey} from "../reducers/login.reducer";
import * as _ from "lodash";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectLoginState = createSelector(selectAuthState, (state) => {
  return state[loginFeatureKey];
});

export const getIsAuthSuccess = createSelector(selectLoginState, (state) => _.get(state, 'success', false))
export const getIsAuthLoading = createSelector(selectLoginState, (state) => _.get(state, 'loading', false))
export const getIsAuthErrors = createSelector(selectLoginState, (state) => _.get(state, 'errors', false))
