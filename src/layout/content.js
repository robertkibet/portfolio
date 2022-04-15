import Image from 'next/image';
import useAuth from '../containers/useAuth';

const Content = ({ children }) => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <Image
        src="https://storage.googleapis.com/sensen-ventures.appspot.com/preloader.gif"
        width="300px"
        height="300px"
        layout="intrinsic"
        priority
      />
    );
  }

  return children;
};

export default Content;
