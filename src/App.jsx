import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="content-center">
      <motion.button
        animate={{
          x: 300,
          y: 300,
          transition: { duration: 2 },
        }}
      >
        Submit
      </motion.button>
      <h1>Hi there</h1>
    </div>
  );
};

export default App;
