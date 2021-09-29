import Text from '../../components/text';
import useGithub from '../../services/github';

const Projects = () => {
  const { projects } = useGithub();
  if (projects && projects.length > 0) {
    return projects.map((item) => (
      <div key={item.id}>
        {item.name}
      </div>
    ));
  }
  return (
    <Text content="Cool projets" />
  );
};

export default Projects;
