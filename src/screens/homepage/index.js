import styled from '@emotion/styled';
import Image from 'next/image';
import Text from '../../components/text';
import colors from '../../theme/colors';

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
const CurrentRole = styled.code`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  a {
    color: ${colors.sweetBlack};
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
        alt="Robert Kibet - Software Engineer"
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
      <CurrentRole>
        <Text
          content="Currently:"
          fontSize="14px"
        />
        <Text
          content="Software Engineer Javascript"
          fontSize="14px"
        />
        <a href="https://www.safaricom.co.ke/" target="_blank" rel="noreferrer">@SafaricomPLC</a>
      </CurrentRole>
    </div>
  </Wrapper>
);

export default Homepage;
