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
          const projectsFetched = response.data.filter((item) => item);

          if (projectsFetched.length > 0) {
            setProjects(projectsFetched?.sort((a, b) => {
              const aPushedAt = a.pushed_at;
              const bPushedAt = b.pushed_at;
              if (aPushedAt > bPushedAt) {
                return -1;
              }
              if (aPushedAt < bPushedAt) {
                return 1;
              }
              return 0;
            }));
          }
        });
    };
    getProjos();
  }, []);

  return { projects };
};
export default useGithub;
