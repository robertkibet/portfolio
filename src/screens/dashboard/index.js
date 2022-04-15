import router from 'next/router';
import React from 'react';
import { authReducer, defaultState } from '../../containers';

const Dashboard = () => {
  const [state] = React.useReducer(authReducer, defaultState);

  React.useEffect(() => {
    if (!state?.user) {
      // redirect to homepage if user is not signed in
      router.push('/');
    }
  }, [state]);
  return (

    <div>Dashboard</div>
  );
};

export default Dashboard;
