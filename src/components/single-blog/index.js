import Link from 'next/link';
import Text from '../text';
import {
  EditorTitle, Header, Wrapper, TopicsList, HeaderWrapper,
} from './styles';

const SingleBlog = ({ article }) => (
  <Wrapper key={article.url}>
    <HeaderWrapper>
      <Header>
        <div>
          <Text content={article?.dateAdded} fontSize="10px" />
          <EditorTitle target="_blank" href="https://twitter.com/RobertKibetK" rel="noreferrer">
            Robert Kibet
          </EditorTitle>
        </div>
        <Link passHref href={`/blog/${article.url}`}>
          <Text id="blog-title" content={article?.title} fontWeight="600" fontSize="26px" />
        </Link>
      </Header>
      <TopicsList>{article?.categories?.map((item) => <span key={Math.random()}>{item}</span>)}</TopicsList>
    </HeaderWrapper>
    <div dangerouslySetInnerHTML={{ __html: article?.content }} />
  </Wrapper>
);

export default SingleBlog;
