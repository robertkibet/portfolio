import styled from '@emotion/styled';
import Link from 'next/link';
import colors from '../../theme/colors';
import { Container } from '../shared';
import Socials from './socials';

const Wrapper = styled.div`
  position: fixed;
  display: block;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${colors.sweetBlueLine};
`;
const Title = styled.h4`
  font-weight: 600px;
  cursor: pointer;
`;
const AppBar = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
const Header = () => (
  <Wrapper>
    <AppBar>
      <Link passHref href="/">
        <Title>Robert Kibet</Title>
      </Link>
      <Socials />
    </AppBar>
  </Wrapper>
);

export default Header;
