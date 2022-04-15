import styled from '@emotion/styled';

const StyledButton = styled.button`
  min-width: 70px;
  font-weight: 600;
  text-transform: uppercase;
  width: max-content;
  height: 34px;
  border-radius: 8px;
  outline: 0;
  border: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
  &: before {
    font-weight: 600px;
  }

  &: hover{
    background-color: rgb(25 210 108 / 9%);
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
export default StyledButton;
