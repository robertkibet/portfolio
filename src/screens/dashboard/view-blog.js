import React from 'react';
import { useRouter } from 'next/router';
import {
  collection, getDocs, query,
} from 'firebase/firestore';
import { firestore } from '../../services/firebase';
import SingleBlog from '../../components/single-blog';

const getData = async (param) => {
  const documents = [];
  const q = query(collection(firestore, 'ARTICLES'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    documents.push(doc.data());
  });

  return documents.find((item) => item.url === param);
};

const ViewBlog = () => {
  const [article, setArticle] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const param = router?.query?.blogUrl;

  const loadData = async () => {
    try {
      setLoading(true);
      const documents = await getData(param);
      setArticle(documents);
    } catch (error) {
      alert(error?.message || 'Failed to fetch latest data, talk to engineering');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => loadData(), []);

  if (loading) return <> </>;
  return (
    <SingleBlog article={article} />
  );
};

export default ViewBlog;
