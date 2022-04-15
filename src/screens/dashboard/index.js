import router from 'next/router';
import React from 'react';
import useAuth from '../../containers/useAuth';

const Dashboard = () => {
  const { state } = useAuth();

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
