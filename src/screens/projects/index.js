import styled from '@emotion/styled';
import Head from 'next/head';
import Text from '../../components/text';
import useGithub from '../../services/github';
import colors from '../../theme/colors';
import ProjectsShimmer from './shimmer';

const Wrapper = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
 
  margin-top: 150px;
  margin-bottom: 150px;
`;
const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  bottom:10px;
  right: 10px;
  background-color: ${colors.sweetGreen};
`;
const Link = styled.a`
  text-decoration: none;
  margin: 0;
  padding:0;
`;
const Items = styled.div`
  padding: 20px;
  height: 200px;
  width: 340px;
  display: grid;
  border-radius: 10px;
  grid-template-rows: max-content max-content 1fr;
  gap: 20px;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  box-shadow: 2px 2px 2px -2px rgb(0 0 0 / 50%);
  background-color: ${colors.sweetBlue};
  p {
    text-transform: capitalize;
    margin: 0;
    line-height: 26px;
  }

`;
const replaceHyphen = (title) => title.replace(/-/g, ' ');
const Projects = () => {
  const { projects } = useGithub();

  const Projos = () => {
    if (projects && projects.length > 0) {
      return projects.map((item) => (
        <Link target="_blank" href={item.html_url} key={item.id}>
          <Items>
            <Text content={replaceHyphen(item.name)} color={colors.white} fontWeight="700" fontSize="1.5rem" />
            <Text content={item.description} color={colors.white} />
            <Avatar />
          </Items>
        </Link>
      ));
    }
    return <ProjectsShimmer />;
  };

  return (
    <>
      <Head>
        <title>Projects - Robert Kibet</title>
      </Head>
      <Wrapper>
        <Projos />
      </Wrapper>
    </>
  );
};

export default Projects;
