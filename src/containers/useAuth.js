import React from 'react';
import {
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
} from 'firebase/auth';

import { AuthContext } from '.';
import { firebaseAuth } from '../services/firebase';

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useCounter must be used within a CounterProvider');

  const [loading, setLoading] = React.useState(true);
  const [isLoginIn, setIsLoginIn] = React.useState(false);

  const clear = () => {
    context.dispatch({
      type: 'LOGOUT_SUCCESS',
    });
    setLoading(false);
    setIsLoginIn(false);
  };

  const login = async (email, password) => {
    try {
      setIsLoginIn(true);
      return await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      context.dispatch({
        type: 'LOGIN_FAIL',
        error: err?.message?.replace('Firebase: ', ''),
      });
      return false;
    } finally {
      setIsLoginIn(false);
    }
  };

  const logout = () => {
    setIsLoginIn(true);
    signOut(firebaseAuth).then(clear);
  };

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    context.dispatch({
      type: 'LOGIN_SUCCESS',
      data: {
        user: authState,
      },
    });
    setLoading(false);
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    ...context,
    loading,
    logout,
    login,
    isLoginIn,
  };
};

export default useAuth;
