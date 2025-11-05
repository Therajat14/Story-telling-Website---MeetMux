import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          scale: 2,
          transition: { duration: 2 },
        }}
      />
      <button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Submit
      </button>
      <h1>Hi there</h1>
    </div>
  );
};

export default App;
