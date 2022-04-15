import React from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Text from '../../components/text';
import Button from '../../components/button';
import {
  Wrapper,
  LoginFormSection,
  HeaderSection,

} from './styles';
import { firebaseAuth, googleProvider } from '../../services/firebase';
import useAuth from '../../containers/useAuth';

const Login = () => {
  const router = useRouter();
  const { state, dispatch } = useAuth();

  React.useEffect(() => {
    if (state.user) {
      router.push('/');
    }
  }, [state]);

  const loginWithGoogle = async () => {
    dispatch({
      type: 'LOGIN_PENDING',
    });
    signInWithPopup(firebaseAuth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { user } = result;

        dispatch({
          type: 'LOGIN_SUCCESS',
          data: {
            user,
            token,
          },
        });
      }).catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const { email } = error;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        dispatch({
          type: 'LOGIN_FAIL',
          error: errorMessage,
        });
      });
  };

  return (
    <Wrapper>
      <LoginFormSection>
        <HeaderSection>
          <Text
            content="Login"
            fontSize="16px"
            fontWeight="600"
          />
          <Text
            content="Cool stuff belong here :)"
            fontSize="12px"
            fontWeight="600"
          />
        </HeaderSection>
        <Button onClick={loginWithGoogle} type="button" primary title={<Text content="Login with Google" fontWeight="600" />} />

      </LoginFormSection>
    </Wrapper>
  );
};

export default Login;
