import styled from '@emotion/styled';
import colors from '../../theme/colors';
import Text from '../text';

const GlobalError = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  height: 60px;
  background-color: ${colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
const Wrapper = styled.div`
  *{
    color: ${colors.white};
  }
`;

const DismissableAlert = ({ message, onClick }) => (
  <GlobalError onClick={onClick} tabIndex={0} role="button">
    <Wrapper>
      <Text content={message || 'Procesing your request...'} fontSize="14px" fontWeight="600" />
    </Wrapper>
  </GlobalError>
);
export default DismissableAlert;
