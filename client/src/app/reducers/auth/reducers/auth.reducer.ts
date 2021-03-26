import {combineReducers, createReducer, createSelector, on} from '@ngrx/store';
import * as loginReducer from './login.reducer';
import * as registerReducer from './register.reducer';
import * as setTokenActions from "../actions/setToken.actions";

export const authFeatureKey = 'auth';


export const reducerToken = createReducer(
  '',
  on(setTokenActions.setToken, (state, action) => action.data),
  on(setTokenActions.clearToken, (state, action) => action.data),

);
export interface State {
  [loginReducer.loginFeatureKey]:loginReducer.LoginState,
  [registerReducer.registerFeatureKey]:registerReducer.State,
  token: string

}

export const initialState: State = {
  [loginReducer.loginFeatureKey]:loginReducer.initialState,
  [registerReducer.registerFeatureKey]:registerReducer.initialState,
  token: ''

};


export const reducer = combineReducers<State>(
  {
    [loginReducer.loginFeatureKey]:loginReducer.reducer,
    [registerReducer.registerFeatureKey]:registerReducer.reducer,
    token: reducerToken
  },
  initialState
);
