import styled from '@emotion/styled';
import colors from '../../theme/colors';

export const Wrapper = styled.div`
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  gap: 10px;
`;
export const EditorTitle = styled.a`
  font-size: 10px;
`;
export const BlogsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const TopicsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;

  span{
    border-radius: 16px;
    background-color: ${colors.inputBorder};
    font-weight: 600;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  gap: 50px;
  width: 100%;
  border-bottom: 1px solid ${colors.inputBorder};
  #blog-title:first-letter {
    text-transform: capitalize;
  }
`;
