import React from 'react';

export const AuthContext = React.createContext();

export const defaultState = {
  user: undefined,
  error: undefined,
  loading: false,
};
export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return {
      ...state,
      user: action.data.user,
      error: undefined,
      loading: false,
    };
  case 'LOGIN_FAIL':
    return {
      ...state,
      user: undefined,
      error: action.error,
      loading: false,
    };
  case 'LOGOUT_SUCCESS':
    return {
      user: undefined,
      error: undefined,
      loading: false,
    };
  case 'LOGOUT_FAIL':
    return {
      ...state,
      error: action.error,

    };
  case 'LOGIN_PENDING':
    return {
      ...state,
      user: undefined,
      error: undefined,
      loading: true,
    };
  default:
    return state;
  }
};
