import { motion } from 'framer-motion';
import Projects from '../screens/projects';
import { pageStyle, pageTransition, pageVariants } from '../theme/transitions';

const Project = () => (
  <motion.div
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Projects />
  </motion.div>
);

export default Project;
