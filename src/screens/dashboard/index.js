import router from 'next/router';
import React from 'react';
import Button from '../../components/button';
import Text from '../../components/text';

import useAuth from '../../containers/useAuth';
import { Header, Wrapper, Container } from './styles';

const Dashboard = () => {
  const { state } = useAuth();

  React.useEffect(() => {
    if (!state?.user) {
      // redirect to homepage if user is not signed in
      router.push('/');
    }
  }, []);

  return (
    <Container>
      <Header>
        <Text content="Dashboard" fontSize="16px" fontWeight="600" />
        <Button onClick={() => router.push('/dashboard/add-blog')} title={<Text content="+ Add Blog" />} />
      </Header>
      <Wrapper>
        <div>blogs</div>
      </Wrapper>

    </Container>
  );
};

export default Dashboard;
