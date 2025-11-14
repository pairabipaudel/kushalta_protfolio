import { motion, AnimatePresence } from "framer-motion";
import './Start_animation.css'
import civil_engineer_cap from "./img/civil_engineer_cap.png";

const Start_animation = () => {

 const text="I am Electrical Engineer";

  return (
    <motion.div className="full_container" >
      
      <motion.img
        src={civil_engineer_cap}
        initial={{ opacity: 0, y: 200, scale: 0 }}
        animate={{ opacity: 1, y: 300, scale: [1,2] }}
        transition={{ duration: 2 }}
        style={{ width: "150px", height: "auto" }}
      />

      <AnimatePresence mode="wait">
        <motion.p
          className="animation_text"
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 350 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          style={{
            
          }}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

export default Start_animation;
