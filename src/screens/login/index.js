import React from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
  Wrapper,
  LoginFormSection,
  HeaderSection,

} from './styles';
import { googleAuth, googleProvider } from '../../services/firebase';
import Text from '../../components/text';
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
    signInWithPopup(googleAuth, googleProvider)
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
          type: 'LOGIN_ERROR',
          error: errorMessage,
        });
      });
  };
  console.log('state', state);

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
        <button onClick={loginWithGoogle} type="button">Login</button>

      </LoginFormSection>
    </Wrapper>
  );
};

export default Login;
