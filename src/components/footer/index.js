import styled from '@emotion/styled';
import colors from '../../theme/colors';
import Text from '../text';

const Wrapper = styled.div`
  position: fixed;
  bottom:0;
  background-color: ${colors.sweetGrean};
  color: ${colors.white};
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Footer() {
  return (
    <Wrapper>
      <Text color={colors.sweetBlack} fontWeight="600" content={new Date().getFullYear()} />
    </Wrapper>
  );
}

export default Footer;
