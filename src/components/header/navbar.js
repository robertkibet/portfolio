import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { authReducer, defaultState } from '../../containers';
import colors from '../../theme/colors';
import { Container } from '../shared';
import Text from '../text';
import Button from '../Button';

const Wrapper = styled.div`
  position: fixed;
  z-index: 98;
  top: 55px;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AppBar = styled(Container)`
  display: flex;
  justify-content: ${(menus) => (menus ? 'flex-start' : 'space-between')};
  ${({ menus }) => (!menus && 'padding: 0;')};
  align-items: center;
  height: 100%;
  gap: 20px;
`;
const Content = styled.div`
  height: 100%;
  min-width: 60px;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  border-bottom: none;
  ${({ active }) => active && `border-bottom: 2px solid ${colors.sweetBlue};`}
  &: hover {
    border-bottom: 2px solid ${colors.sweetBlue};
  }
  p {
    margin: 0;
  }
`;
const Navbar = () => {
  const [state, dispatch] = React.useReducer(authReducer, defaultState);

  const router = useRouter();
  const navigateTo = (link) => {
    router.push(link);
  };
  const signOut = () => {
    dispatch({ type: 'SIGN_OUT' });
  };
  return (
    <Wrapper>
      <AppBar menus>
        <AppBar>
          <Content active={router.pathname === '/projects'} onClick={() => navigateTo('/projects')}>
            <Text content="Projects" fontWeight="600" />
          </Content>
          <Content active={router.pathname === '/blog'} onClick={() => navigateTo('/blog')}>
            <Text content="Blog" fontWeight="600" />
          </Content>
        </AppBar>
        {!state?.user ? <Button onClick={() => navigateTo('/sign-in')} title={<Text content="Login" fontWeight="600" />} />
          : <Button onClick={signOut} title={<Text content="Logout" fontWeight="600" />} />}
      </AppBar>
    </Wrapper>
  );
};

export default Navbar;
