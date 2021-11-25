import { motion } from 'framer-motion';
import Homepage from '../screens/homepage';
import { pageStyle, pageTransition, pageVariants } from '../theme/transitions';

const Home = () => (
  <motion.div
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Homepage />
  </motion.div>
);

export default Home;
