import {createSelector} from '@ngrx/store';
import * as _ from "lodash";
import {selectAuthState} from "./auth.selectors";
import {registerFeatureKey} from "../reducers/register.reducer";

export const selectLoginState = createSelector(selectAuthState, (state) => {
  return state[registerFeatureKey];
});

export const getIsRegisterSuccess = createSelector(selectLoginState, (state) => _.get(state, 'success', false))
export const getIsRegisterLoading = createSelector(selectLoginState, (state) => _.get(state, 'loading', false))
export const getIsRegisterErrors = createSelector(selectLoginState, (state) => _.get(state, 'errors', false))
