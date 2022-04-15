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
const Pills = styled.div`
  height: 30px;
  border-radius: 16px;
  padding-left: 15px;
  padding-right: 15px;
  min-width:50px;
  display: grid;
  place-items: center;
  align-items: center;
  font-weight: 600;
  background-color: #efefef;
  *{
    margin: 0;
    padding: 0;
  }
`;
const SkillsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Skills = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const languages = [
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'AWS',
  'GCP',
  'GraphQL',
  'JavaScript',
  'HTML',
  'CSS',
  'Rust',
];
const ProgrammingSkills = () => (
  <Skills>

    <SkillsWrapper>
      {languages.map((language) => (
        <Pills key={language}>
          <Text
            content={language}
            fontSize="12px"
            fontWeight="600"
          />
        </Pills>
      ))}
    </SkillsWrapper>
    <Text
      content="Please feel free to contact me if you have any questions or want to work together."
      fontSize="14px"
    />
  </Skills>
);
const Homepage = () => (
  <Wrapper>
    <Avatar>
      <Image
        priority
        src="https://storage.googleapis.com/sensen-ventures.appspot.com/robert-kibet-software-engineer-2.jpg"
        layout="intrinsic"
        width="400px"
        height="400px"
        alt="Robert Kibet - Software Engineer"
      />
    </Avatar>
    <div>
      <Text
        content="Robert Kibet Kiprono"
        fontWeight="600"
        fontSize="20px"
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
      <ProgrammingSkills />
    </div>
  </Wrapper>
);

export default Homepage;
