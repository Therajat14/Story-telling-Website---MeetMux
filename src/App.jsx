import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const section3 = useRef(null);

  useEffect(() => {
    // Clean old triggers before creating new ones (for hot reloads)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Box 1 animation
    gsap.to(box1.current, {
      scrollTrigger: {
        trigger: box1.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: true, // 👈 debug markers
      },
      rotation: 360,
      scale: 0.3,
      opacity: 0.3,
    });

    // Box 2 animation
    gsap.from(box2.current, {
      scrollTrigger: {
        trigger: box2.current,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        markers: true,
      },
      x: -300,
      opacity: 0,
      scale: 0.8,
    });

    // Section 3 animation
    gsap.to(box3.current, {
      scrollTrigger: {
        trigger: section3.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        markers: true,
      },
      scale: 5,
      rotation: 720,
      opacity: 0.5,
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Section 1 */}
      <section className="flex h-[120vh] items-center justify-center bg-gradient-to-r from-slate-800 to-slate-600">
        <div
          ref={box1}
          className="h-32 w-32 rounded-xl bg-amber-400 shadow-xl"
        ></div>
      </section>

      {/* Section 2 */}
      <section className="flex h-[120vh] items-center justify-center bg-gradient-to-r from-rose-600 to-red-400">
        <div
          ref={box2}
          className="h-32 w-32 rounded-xl bg-gray-100 shadow-2xl"
        ></div>
      </section>

      {/* Section 3 */}
      <section
        ref={section3}
        className="flex h-[120vh] items-center justify-center bg-gradient-to-r from-green-600 to-emerald-400"
      >
        <div
          ref={box3}
          className="h-32 w-32 rounded-xl bg-black shadow-2xl"
        ></div>
      </section>
    </div>
  );
};

export default App;
