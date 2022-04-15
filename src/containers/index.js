import React from 'react';

export const AuthContext = React.createContext();

export const defaultState = {
  user: undefined,
  error: undefined,
  loading: false,
};
export const authReducer = (state, action) => {
  switch (action) {
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
      error: action.data.error,
      loading: false,
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
