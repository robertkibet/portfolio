import styled from '@emotion/styled';
import Text from '../../components/text';

const Wrapper = styled.div`
  min-height: 600px;
  width: 100%;
  display: block;
  align-items:center;
  text-align: center;
  gap: 20px;
 
  @media(max-width: 1400px){
    margin-bottom: 150px;
    margin-top: 150px;
  }
`;
const Homepage = () => (
  <Wrapper>
    <Text
      content="I USE PROGRAMMING
      TO CREATE ENJOYABLE
      EXPERIENCES THAT SOLVE
      PROBLEMS"
      fontWeight="600"
      fontSize="20px"
    />
    <Text
      content="I ENJOY HIKING AS MUCH AS COOKING ;P "
      fontSize="14px"
    />
  </Wrapper>
);

export default Homepage;
