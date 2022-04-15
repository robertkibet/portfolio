import React from 'react';
import { AuthContext } from '.';

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) throw new Error('useCounter must be used within a CounterProvider');

  return context;
};
export default useAuth;
