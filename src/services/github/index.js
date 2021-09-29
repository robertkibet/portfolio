import axios from 'axios';
import React from 'react';

const useGithub = () => {
  const [projects, setProjects] = React.useState([]);
  const apiKey = process.browser && process.env.NEXT_PUBLIC_GIT_TOKEN;

  React.useEffect(() => {
    const getProjos = async () => {
      await axios
        .get('https://api.github.com/users/robertkibet/repos', {
          headers: { // eslint-disable-line
            Authorization: 'token '+apiKey, // eslint-disable-line
          }, // eslint-disable-line
        })
        .then((response) => {
          const projectsFetched = response.data.filter((item) => item.private === false);
          setProjects(projectsFetched);
        });
    };
    getProjos();
  }, []);

  return { projects };
};
export default useGithub;
