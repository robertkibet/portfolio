import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import colors from '../../theme/colors';
import { Container } from '../shared';
import Text from '../text';

const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  display: block;
  height: 40px;
  width: 100%;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`;
const AppBar = styled(Container)`
  display: flex;
  justify-content: flex-start;
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
  &: hover {
    border-bottom: 2px solid ${colors.sweetBlue};
  }
  p {
    margin: 0;
  }
`;
const Navbar = () => {
  const router = useRouter();
  const navigateTo = (link) => {
    // tracking code
    router.push(link);
  };
  return (
    <Wrapper>
      <AppBar>
        <Content onClick={() => navigateTo('/projects')}>
          <Text content="Projects" fontWeight="600" />
        </Content>
        <Content>
          <Text content="Blog" fontWeight="600" />
        </Content>
      </AppBar>
    </Wrapper>
  );
};

export default Navbar;
