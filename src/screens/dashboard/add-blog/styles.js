import styled from '@emotion/styled';
import { Form } from 'formik';
import Button from '../../../components/button';
import colors from '../../../theme/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  min-height: 90vh;

  .rdw-editor-wrapper{
    min-height: 500px;
  }
  margin-bottom: 100px;
`;

export const AddBlogWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  * {
    margin: 0;
  }
`;

export const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const FieldWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content max-content max-content;
  gap: 5px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;

export const StyledForm = styled(Form)`
  width: 100%;
`;
export const RegisterLink = styled.strong`
  cursor: pointer;
  color: ${colors.sweetBlue};
`;

export const StyledInput = styled.input`
  width: 100% !important;
  min-width: 100% !important;
  padding-left: 10px;
  padding-right: 40px;
  font-size: 14px;
  height: 34px;
  border-radius: 4px;
  border: none;
  transition: border 300ms ease;
  ${({ error }) => (error && 'border: 3px solid red;')}
  outline: 3px solid ${({ error }) => (error ? 'red' : colors.inputBorder)};
  
  &: focus-within, focus-visible {
    border: 3px solid ${({ error }) => (error ? 'red' : colors.sweetGreen)} !important;
    outline: 3px solid ${({ error }) => (error ? 'red' : colors.sweetGreen)} !important;

  }
  @media (max-width: 900px) {
    height: 40px;
  }
  
`;
export const StyledButton = styled(Button)`
  width: 150px;
  color: ${colors.white};
`;
export const HelperMessage = styled.span`
  margin: 0;
  color: ${({ error }) => (error ? 'red' : colors.sweetGreen)};
`;
