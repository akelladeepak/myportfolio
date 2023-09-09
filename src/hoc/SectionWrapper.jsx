import { motion } from "framer-motion";
import { styles } from '../styles';
import { staggerContainer } from "../utils/motion";

//This is a higher order component take will take a component as an argument and return a new component that wraps the original.
const SectionWrapper = (Component, idName) => 
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
            >
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper