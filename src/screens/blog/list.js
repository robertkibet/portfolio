import SingleBlog from '../../components/single-blog';

const Articles = ({ articles }) => articles?.map((article) => <SingleBlog key={article?.url} article={article} />);

export default Articles;
