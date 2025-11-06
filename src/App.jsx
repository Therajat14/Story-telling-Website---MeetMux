"use client";
import { useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export default function FramerMotionShowcase() {
  // --- useRef for scroll container (viewport example)
  const scrollRef = useRef(null);

  // --- useScroll + useTransform (scroll based animation)
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0f172a", "#1e1b4b"],
  );

  // --- useMotionValue + useMotionTemplate
  const x = useMotionValue(0);
  const gradient = useMotionTemplate`linear-gradient(90deg, #8b5cf6 ${x}px, #ec4899)`;

  // --- Variants for reusable animations
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, scale: 0.2 },
  };

  return (
    <motion.div
      ref={scrollRef}
      style={{ background }}
      className="flex h-[350vh] w-full flex-col items-center overflow-y-scroll text-white"
    >
      {/* Section 1 - initial / animate / transition */}
      <motion.div
        className="sticky top-20 mt-20 rounded-2xl bg-purple-600 p-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-xl font-semibold">
          🎬 initial / animate / transition
        </h2>
      </motion.div>

      {/* Section 2 - whileHover / whileTap */}
      <motion.button
        className="mt-20 rounded-xl bg-pink-600 px-6 py-3"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        🖱️ Hover / Tap Me
      </motion.button>

      {/* Section 3 - drag */}
      <motion.div
        className="mt-20 h-40 w-40 cursor-grab rounded-xl bg-indigo-500"
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        whileDrag={{ scale: 1.1 }}
      >
        <p className="mt-16 text-center">Drag Me</p>
      </motion.div>

      {/* Section 4 - whileInView */}
      <motion.div
        className="mt-40 rounded-xl bg-emerald-600 p-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5, root: scrollRef }}
        transition={{ duration: 0.7 }}
      >
        👀 whileInView + viewport
      </motion.div>

      {/* Section 5 - useScroll + useTransform */}
      <motion.div
        style={{ scale, rotate }}
        className="mt-40 flex h-40 w-40 items-center justify-center rounded-full bg-blue-500"
      >
        Scroll Anim
      </motion.div>

      {/* Section 6 - useMotionValue + useMotionTemplate */}
      <motion.div
        style={{ background: gradient }}
        className="mt-40 flex h-20 w-60 items-center justify-center rounded-lg text-center"
        drag="x"
        style={{ x, background: gradient }}
      >
        🎨 useMotionTemplate
      </motion.div>

      {/* Section 7 - Variants + AnimatePresence */}
      <AnimatePresence>
        <motion.div
          className="mt-40 rounded-lg bg-yellow-500 p-8 font-bold text-black"
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          🎭 Variants + AnimatePresence
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
