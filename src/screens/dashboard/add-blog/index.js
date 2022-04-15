import React from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { doc, setDoc } from 'firebase/firestore';

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

import useAuth from '../../../containers/useAuth';
import { firestore } from '../../../services/firebase';

const blogSchema = Yup.object().shape({
  title: Yup.string().required('Enter title'),
  categories: Yup.array().min(1, 'Select at least one category'),
});

const AddBlog = () => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const router = useRouter();
  const auth = useAuth();
  const { state } = auth;

  const handleAddBlog = async (values) => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setIsSubmitting(true);
    try {
      const url = values.title.toLowerCase().replace(/[^a-z0-9 _-]+/gi, '-');

      const extendedBlogUrl = `${new Date().toISOString().slice(0, 10)}-${url}`;

      await setDoc(doc(firestore, 'ARTICLES', extendedBlogUrl), {
        url,
        categories: values.categories,
        title: values.title,
        content,
        dateAdded: new Date().toISOString().slice(0, 10),
        addedBy: state.user.email,
      });

      router.push(`/dashboard/blog/${url}`);
    } catch (error) {
      alert(error?.message || 'Failed to save this article');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
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
                  />
                  {!!errors.title && <HelperMessage error={!!errors.title}>{errors.title}</HelperMessage>}
                </FieldWrapper>
                <FieldWrapper required error={!!errors.categories} variant="standard">
                  <select
                    multiple
                    required
                    name="categories"
                    id="categories"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.categories}
                  >
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
                  {!!errors.categories && <HelperMessage error={!!errors.categories}>{errors.categories}</HelperMessage>}
                </FieldWrapper>

                <Editor setEditorState={setEditorState} editorState={editorState} />

                <StyledButton disabled={!(isValid && dirty) || isSubmitting} type="submit" primary title={<Text content={isSubmitting ? 'loading...' : 'Save'} fontWeight="600" />} />

              </Container>
            </StyledForm>
          )}
        </Formik>
      </AddBlogWrapper>
    </Wrapper>
  );
};

export default AddBlog;
