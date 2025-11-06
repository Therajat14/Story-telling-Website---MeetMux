import { motion, useScroll, useTransform } from "framer-motion";

export default function Svg() {
  // Detect overall page scroll
  const { scrollYProgress } = useScroll();

  // Transform scroll progress into style values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div className="relative h-[300vh] bg-gray-900 text-white">
      {/* Sticky wrapper keeps element visible during scroll */}
      <div className="sticky top-1/2 flex items-center justify-center">
        <motion.div
          style={{ scale, opacity }}
          className="flex h-40 w-40 items-center justify-center rounded-2xl bg-purple-500 text-2xl font-semibold text-white"
        >
          Scroll me 🚀
        </motion.div>
      </div>
    </div>
  );
}
