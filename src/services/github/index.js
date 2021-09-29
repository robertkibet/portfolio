import axios from "axios";
import React from "react";

const useGithub = () => {
  const [projects, setProjects ] = React.useState([]);
  const api_key =  process.browser && process.env.NEXT_PUBLIC_GIT_TOKEN;

  React.useEffect(()=>{
    const getProjos = async ()=>{
      await axios.get('https://api.github.com/users/robertkibet/repos', {
        headers: {
          Authorization: `token ${api_key}`,
        },
      }).then(response=>{

        const projectsFetched =  response.data.filter(item => item.private===false);
        setProjects(projectsFetched);
        console.log(projectsFetched)
      })
    }
    getProjos();
  },[]);

  return {projects};

};
export default useGithub;
