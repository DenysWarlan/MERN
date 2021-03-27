import {createSelector} from '@ngrx/store';
import {loginFeatureKey} from "../reducers/login.reducer";
import * as _ from "lodash";
import {selectAuthState} from "./auth.selectors";

export const selectLoginState = createSelector(selectAuthState, (state) => state[loginFeatureKey]);

export const getIsAuthSuccess = createSelector(selectLoginState, (state) => _.get(state, 'success', false))
export const getIsAuthLoading = createSelector(selectLoginState, (state) => _.get(state, 'loading', false))
export const getIsAuthErrors = createSelector(selectLoginState, (state) => _.get(state, 'errors', false))
