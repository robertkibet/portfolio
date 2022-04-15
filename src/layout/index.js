import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { onAuthStateChanged } from 'firebase/auth';
import Header from '../components/header';
import NavBar from '../components/header/navbar';
import Footer from '../components/footer';
import { Container } from '../components/shared';
import { AuthContext, authReducer, defaultState } from '../containers';
import { firebaseAuth } from '../services/firebase';

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
  const isAuth = authPages.some((page) => pageName.includes(page));
  const [state, dispatch] = React.useReducer(authReducer, defaultState);

  const authStateChanged = async (authState) => {
    if (authState && !state.user) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        data: {
          user: authState,
          token: authState.accessToken,
        },
      });
    }
  };

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        state,
        dispatch,
      }}
    >
      <Wrapper auth={isAuth}>
        {!isAuth && <Header />}
        {!isAuth && <NavBar />}

        {children}
      </Wrapper>
      <Footer />
    </AuthContext.Provider>
  );
};

export default Layout;
