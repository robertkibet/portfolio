import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Head from 'next/head';
import Text from '../../components/text';
import { Container } from '../../components/shared';

const Box = styled(Container)`
  margin-top: 150px;
  margin-bottom: 150px;
`;
const Wrapper = styled.div`
  min-width: 300px;
  max-width: 400px;
  width: 100%;
  height: 500px;
  background-color: #FFFFF4;
  display: grid;
  grid-template-rows: 100px 50px 200px 200px;
  justify-items: start;
  padding: 30px;
`;
const Section = styled.div`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  gap: 5px;
  width: 100%;
`;
const Header = styled.div`
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;
const shimmer = keyframes`
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
`;
const Menus = styled.div`
  height: 15px;
  width: ${({ width }) => width || '200px'};
  border-radius: 20px;
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
  background: transparent;
  background: linear-gradient(to right, #d5d3d3 18%, #dfdfdf 18%, #dbd9d9 63%);
  background-size: 1300px 100%;
`;

const Blog = () => (
  <Box>
    <Head>
      <title>Blogs - Robert Kibet</title>
    </Head>
    <Header>
      <Text
        fontSize="16px"
        content="Interesting stuff streaming in real soon,
        highly likely its going to be about a super exciting phenomenon,
        probably a common one, probably a menu I did recently :)"
      />
    </Header>
    <Wrapper>
      <Section>
        <Menus width="30px" />
        <Menus width="30px" />
      </Section>
      <Section>
        <Menus width="90%" />
      </Section>
      <Section>
        <Menus width="100%" />
        <Menus width="100%" />
        <Menus width="100%" />
        <Menus width="70%" />
        <Menus width="30%" />
      </Section>
      <Section>
        <Menus width="20%" />
        <Menus width="20%" />
      </Section>
    </Wrapper>
  </Box>
);

export default Blog;
