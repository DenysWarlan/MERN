import { Action, createReducer, on } from '@ngrx/store';
import * as registerAction from "../actions/register.actions";
import {itemOperationStateReducerUtil, SingleState} from "../../common/common.reducer";


export const registerFeatureKey = 'register';

export interface State extends SingleState {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,
  on(registerAction.loadRegisters, itemOperationStateReducerUtil.request),
  on(registerAction.loadRegistersSuccess, itemOperationStateReducerUtil.requestSuccess),
  on(registerAction.loadRegistersFailure, itemOperationStateReducerUtil.requestFailure),

);

