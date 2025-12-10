import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Projectslider.css";

import img1 from "../assets/ProjectSlider/img1.png";
import img2 from "../assets/ProjectSlider/img2.png";
import img3 from "../assets/ProjectSlider/img3.png";
import img4 from "../assets/ProjectSlider/img4.png";
import img5 from "../assets/ProjectSlider/img5.png";

export default function ProjectsSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const projects = [ { img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 } ];

  return (
    <>
      {/* Header */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
        className="text-center mb-10 sm:mb-12 px-4"
      >
        <div
          id="projects"
          className="inline-flex items-center gap-2 px-4 py-2 
          bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-4"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">
            SUCCESS_STORIES
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-custom mb-4 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-cyan-400 via-purple-400 to-cyan-400"
        >
          SheBuilds Success
        </h2>

        <div className="mx-auto w-32 sm:w-40 h-0.5 bg-gradient-to-r 
          from-transparent via-cyan-500 to-transparent mb-3"
        />

        <p className="text-gray-400 text-sm sm:text-base md:text-lg font-custom max-w-xl mx-auto px-4">
          A showcase of our most impactful journeys and achievements.
        </p>
      </motion.div>

      {/* 3D Carousel */}
      <div className="banner">
        <div className="slider" style={{ "--quantity": projects.length }}>
          {projects.map((p, i) => (
            <div key={i} className="item" style={{ "--position": i + 1 }}>
              <img src={p.img} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
