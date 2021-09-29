import styled from '@emotion/styled';
import colors from '../../theme/colors';

const Wrapper = styled.p`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  color: ${({ color }) => color || colors.sweetBlack};
`;

const Text = (props) => {
  const {
    color, content, fontSize, fontWeight, ...rest
  } = props;
  return (
    <Wrapper color={color} fontWeight={fontWeight} fontSize={fontSize} {...rest}>
      {content}
    </Wrapper>
  );
};

export default Text;
