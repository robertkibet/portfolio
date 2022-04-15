import styled from '@emotion/styled';
import colors from '../../theme/colors';

const StyledButton = styled.button`
  min-width: 70px;
  font-weight: 600;
  text-transform: uppercase;
  width: max-content;
  padding: 6px 8px;
  height: 34px;
  border-radius: 4px;
  outline: 0;
  border: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ primary }) => (primary ? `${colors.sweetBlue};` : 'transparent;')};
  * {
    ${({ primary }) => primary && `color: ${colors.white} !important;`}
  }
  &: before {
    font-weight: 600px;
  }
  &: disabled{
    cursor: no-drop;
  }

  &: hover {
    background-color: ${({ primary }) => {
  if (primary) {
    return 'filter: brightness(0.5);';
  }
  return 'rgb(25 210 108 / 9%);';
}};

    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
export default StyledButton;
