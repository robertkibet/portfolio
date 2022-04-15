import styled from '@emotion/styled';
import colors from '../../theme/colors';

const IconWrapper = styled.i`
  font-size: ${({ size }) => size || '20px'};
  color: ${({ color }) => color || colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  &: before {
    font-weight: 600px;
  }

  &: hover{
    // background-color: ${colors.sweetGreen};
    background-color: rgb(25 210 108 / 9%);
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
// Read the readme file to see how to use this shared component to serve your icons.
const Icon = ({
  name, size, color, ...rest
}) => (
  <IconWrapper color={color} size={size} className={`icon-${name}`} {...rest} />
);

Icon.defaultProps = {
  color: colors.white,
  size: '20px',
  style: {},
};

export default Icon;
