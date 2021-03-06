import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Header from '../components/header';
import NavBar from '../components/header/navbar';
import Footer from '../components/footer';
import { Container } from '../components/shared';
import { AuthContext, authReducer, defaultState } from '../containers';
import Content from './content';

const Wrapper = styled(Container)`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ auth }) => !auth && 'padding-top: 120px;'}
  position: relative;
`;

const Layout = ({ children }) => {
  const router = useRouter();
  const pageName = router.pathname;
  const authPages = ['/sign-in'];
  const isBlog = router.pathname.includes('/blog');
  const isAuth = authPages.some((page) => pageName.includes(page));
  const [state, dispatch] = React.useReducer(authReducer, defaultState);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        state,
        dispatch,
      }}
    >
      <Wrapper auth={isAuth}>
        <Content>
          {!isAuth && <Header />}
          {!isAuth && <NavBar />}

          {children}
        </Content>
      </Wrapper>
      {!isBlog && <Footer />}
    </AuthContext.Provider>
  );
};

export default Layout;
