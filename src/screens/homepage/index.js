import styled from '@emotion/styled';
import Image from 'next/image';
import Text from '../../components/text';

const Wrapper = styled.div`
  min-height: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  gap: 20px;
 
  margin-bottom: 150px;
  margin-top: 150px;
`;

const Avatar = styled.div`
  height: 300px;
  width: 300px;
  img {
    border-radius: 50%;
  }
`;
const Homepage = () => (
  <Wrapper>
    <Avatar>
      <Image
        priority
        src="https://storage.googleapis.com/sensen-ventures.appspot.com/robert-kibet-software-engineer.jpg"
        layout="responsive"
        width="410px"
        height="400px"
        alt="Robert Kibet - Software Engineer Javascript"
      />
    </Avatar>
    <div>
      <Text
        content="Robert Kibet Kiprono"
        fontWeight="400"
        fontSize="16px"
      />
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
    </div>
  </Wrapper>
);

export default Homepage;
