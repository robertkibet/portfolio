import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Text from '../../components/text';

import {
  Wrapper,
  LoginFormSection,
  Container,
  HeaderSection,
  StyledForm,
  FieldWrapper,
  StyledButton,
  StyledInput,
  HelperMessage,
} from './styles';

import useAuth from '../../containers/useAuth';
import DismissableAlert from '../../components/alerts/dismissable-alert';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Enter your email')
    .test('is-accepted', 'This email is not accepted', (value) => {
      if (value) {
        return value.trim().endsWith('@kibet.me');
      }
      return false;
    }),
  password: Yup.string().required('password is required'),
});

const Login = () => {
  const router = useRouter();
  const auth = useAuth();
  const { state, login, isLoginIn } = auth;

  React.useEffect(() => {
    if (state.user) {
      router.push('/');
    }
  }, [state]);

  const handleLogin = async (values) => {
    await login(values.email.trim(), values.password.trim());
  };

  return (
    <Wrapper>
      {!isLoginIn && state?.error && <DismissableAlert severity="error" message={state?.error} />}
      <LoginFormSection>
        <HeaderSection>
          <Text
            content="Login"
            fontSize="24px"
            fontWeight="600"
          />
          <Text
            content="Cool stuff belong here :)"
            fontSize="16px"
            fontWeight="600"
          />

        </HeaderSection>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleLogin}
          validateOnChange
          validateOnBlur
          validationSchema={loginSchema}
        >
          {({
            values, errors, handleChange, handleBlur, handleSubmit, isValid, dirty,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Container>
                <FieldWrapper required error={!!errors.email} variant="standard">
                  <StyledInput
                    error={!!errors.email}
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                  {!!errors.email && <HelperMessage error={!!errors.email}>{errors.email}</HelperMessage>}
                </FieldWrapper>

                <FieldWrapper required error={!!errors.password} variant="standard">
                  <StyledInput
                    error={!!errors.password}
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Password"
                    variant="outlined"
                    size="small"
                  />
                  {!!errors.password && <HelperMessage error={!!errors.password}>{errors.password}</HelperMessage>}
                </FieldWrapper>

                <StyledButton disabled={!(isValid && dirty) || isLoginIn} type="submit" primary title={<Text content={isLoginIn ? 'loading...' : 'Login'} fontWeight="600" />} />

              </Container>
            </StyledForm>
          )}
        </Formik>
      </LoginFormSection>
    </Wrapper>
  );
};

export default Login;
