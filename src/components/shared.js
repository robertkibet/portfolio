import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1280px;  
  width: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

const Button = styled.div`
  position: fixed;
  height: 40px;
  width: 100%;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`;

export {Container, Button};