import { Action, createReducer, on } from '@ngrx/store';
import * as loginAction from "../actions/login.actions";
import {itemOperationStateReducerUtil, SingleState} from "../../common/common.reducer";


export const loginFeatureKey = 'login';

export interface LoginState extends SingleState{

}

export const initialState: LoginState = {

};


export const reducer = createReducer(
  initialState,
  on(loginAction.loadLogins, itemOperationStateReducerUtil.request),
  on(loginAction.loadLoginsSuccess, itemOperationStateReducerUtil.requestSuccess),
  on(loginAction.loadLoginsFailure, itemOperationStateReducerUtil.requestFailure),

);

