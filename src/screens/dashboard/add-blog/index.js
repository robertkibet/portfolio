import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import Text from '../../../components/text';
import Editor from '../../../components/editor';

import {
  Wrapper,
  AddBlogWrapper,
  Container,
  HeaderSection,
  StyledForm,
  FieldWrapper,
  StyledButton,
  StyledInput,
  HelperMessage,
} from './styles';

import DismissableAlert from '../../../components/alerts/dismissable-alert';
import useAuth from '../../../containers/useAuth';

const blogSchema = Yup.object().shape({
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

const AddBlog = ({ submitBlog }) => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const router = useRouter();
  const auth = useAuth();
  const { state, login, isLoginIn } = auth;

  const handleAddBlog = (values) => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    try {
      console.log('submitBlog', {
        content,
        values,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {!isLoginIn && state?.error && <DismissableAlert severity="error" message={state?.error} />}
      <AddBlogWrapper>
        <HeaderSection>
          <Text
            content="New Article"
            fontSize="24px"
            fontWeight="600"
          />
        </HeaderSection>
        <Formik
          initialValues={{
            title: '',
            categories: '',
          }}
          onSubmit={handleAddBlog}
          validateOnChange
          validateOnBlur
          validationSchema={blogSchema}
        >
          {({
            values, errors, handleChange, handleBlur, handleSubmit, isValid, dirty,
          }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Container>
                <FieldWrapper required error={!!errors.title} variant="standard">
                  <StyledInput
                    error={!!errors.title}
                    id="title"
                    placeholder="Enter title"
                    type="text"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Title"
                    variant="outlined"
                    size="small"
                    name="title"
                  />
                  {!!errors.title && <HelperMessage error={!!errors.title}>{errors.title}</HelperMessage>}
                </FieldWrapper>

                <select multiple required name="categories" id="categories">
                  <option value="technology">Technology</option>
                  <option value="art">Art</option>
                  <option value="programming">Programming</option>
                  <option value="javascript">JavaScript</option>
                  <option value="rust">Rust</option>
                  <option value="typescrit">TypeScript</option>
                  <option value="mongo-db">Mongo DB</option>
                  <option value="nodejs">NodeJs</option>
                  <option value="react">React</option>
                  <option value="nextjs">Nextjs</option>
                </select>
                <Editor setEditorState={setEditorState} editorState={editorState} />

                <StyledButton disabled={!(isValid && dirty)} type="submit" primary title={<Text content={isLoginIn ? 'loading...' : 'Save'} fontWeight="600" />} />

              </Container>
            </StyledForm>
          )}
        </Formik>
      </AddBlogWrapper>
    </Wrapper>
  );
};

export default AddBlog;
