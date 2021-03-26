export interface ItemState {
  loading?: boolean;
  success?: boolean;
  errors?: any;
}
export interface ListState extends ItemState {
  ids?: number[];
  res?: [];
  params?: {};
  meta?: {};
}
export interface SingleState<I = any> extends ItemState {
  id?: I;
  res?: I;
}

export const listReducerUtil = {
  get: (state: ListState): ListState => {
    return {
      ...state,
      loading: true,
      success: false,
      errors: null,
    };
  },
  getSuccess: (state: ListState, action: any): ListState => {
    const successPayload = action.data;
    return {
      ...state,
      res: successPayload,
      loading: false,
      success: true,
      errors: null,
    };
  },
  getFailure: (state: ListState, action: any): ListState => {
    const failPayload = action.errors;
    return {
      ...state,
      res: [],
      loading: false,
      errors: failPayload.message,
      success: false,
    };
  },
  clear: (state: ListState): ListState => {
    return {
      ...state,
      ids: [],
      loading: false,
      success: false,
      errors: null,
      params: {},
      meta: {},
    };
  },
};
export const itemOperationStateReducerUtil = {
  request: (state: SingleState): SingleState  => {
    return {
      ...state,
      loading: true,
      success: false,
      errors: null,
    };
  },
  requestSuccess: (state: SingleState, action: any): SingleState => {
    const successPayload = action.data;
    return {
      ...state,
      res: successPayload,
      loading: false,
      success: true,
      errors: null,
    };
  },
  requestFailure: (state: SingleState, action: any): SingleState => {
    const failPayload = action.error.error;
    return {
      ...state,
      res: [],
      loading: false,
      errors: failPayload,
      success: false,
    };
  },
  clear: (state: SingleState): SingleState => {
    return {
      ...state,
      id: null,
      loading: false,
      success: false,
      errors: null,
    };
  },
};
