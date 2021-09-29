import { motion } from 'framer-motion';
import Blog from '../screens/blog';
import { pageStyle, pageTransition, pageVariants } from '../theme/transitions';

const Blogs = () => (
  <motion.div
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Blog />
  </motion.div>
);
export default Blogs;
