import styled from '@emotion/styled';
import useTracker from '../../services/analytics/tagmananger';
import colors from '../../theme/colors';
import Icon from '../Icon';

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  grid-template-columns: repeat(4, 20px);
  gap: 10px;
`;
const Link = styled.a`
  text-decoration: none;
`;
const Socials = () => {
  const { track } = useTracker();
  const handleSocialsClick = (page) => {
    // track report
    track(page);
  };
  return (
    <Wrapper>
      <Link onClick={() => handleSocialsClick('github')} target="_blank" href="https://github.com/robertkibet">
        <Icon name="github" color={colors.sweetGrean} size="25px" />
      </Link>
      <Link onClick={() => handleSocialsClick('linkedin')} target="_blank" href="https://www.linkedin.com/in/robert-kiprono-a09889a4/">
        <Icon name="linkedin" color={colors.sweetGrean} size="25px" />
      </Link>
      <Link onClick={() => handleSocialsClick('twitter')} target="_blank" href="https://twitter.com/realrobertkibet">
        <Icon name="twitter" color={colors.sweetGrean} size="25px" />
      </Link>
    </Wrapper>
  );
};

export default Socials;
