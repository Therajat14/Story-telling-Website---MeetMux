import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
const App = () => {
  const boxRef = useRef(null);
  console.log(boxRef);
  return (
    <div
      ref={boxRef}
      className="flex h-screen items-center justify-center bg-gray-900 font-mono"
    >
      <motion.div
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1, rotate: 360 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        drag
        dragConstraints={boxRef}
        className="flex h-40 w-40 items-center justify-center rounded-xl bg-blue-900 text-gray-300"
      >
        Hover Me
      </motion.div>
    </div>
  );
};

export default App;
