import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
`;

const Items = styled.div`
  padding: 20px;
  height: 200px;
  width: 340px;
  border-radius: 10px;
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
  background: transparent;
  background: linear-gradient(to right, #d5d3d3 28%,  #dbd9d9 93%);
  background-size: 1200px 100%;
`;

const ProjectsShimmer = () => (
  [1, 2, 3, 4, 5, 6].map((item) => <Items key={item} />)
);
export default ProjectsShimmer;
