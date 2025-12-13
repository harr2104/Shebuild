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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const images = [img1, img2, img3, img4, img5];

  return (
    <>
      <div className="slider-section">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="text-center mb-10 sm:mb-12 px-4"
        >
          {/* Tag */}
          <div
            id="projects"
            className="inline-flex items-center gap-2 px-4 py-2 projects-slider-section 
            bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-4"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">
              SUCCESS_STORIES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-custom mb-4 
            bg-clip-text text-transparent bg-gradient-to-r 
            from-cyan-400 via-purple-400 to-cyan-400"
          >
            SheBuilds Success
          </h2>

          {/* Animated Underline */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "200px" } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto h-0.5 bg-gradient-to-r 
            from-transparent via-cyan-500 to-transparent mb-4"
          />

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto 
            font-custom leading-relaxed"
          >
            Stories of impact, innovation, and inspiration from our amazing community
          </motion.p>
        </motion.div>

        {/* 3D CAROUSEL WITH CENTER TEXT */}
        <div className="carousel-wrapper">
          <div className="banner">

            {/* Center Text */}
            <div className="carousel-center-text">
              <div className="carousel-title">SHEBUILDS</div>
              <div className="carousel-subtext">
                For <br /> Namma Singappengal
              </div>
            </div>

            {/* Rotating Images */}
            <div className="slider" style={{ "--quantity": images.length }}>
              {images.map((img, i) => (
                <div key={i} className="item" style={{ "--position": i + 1 }}>
                  <img
                    src={img}
                    alt={`slide-${i}`}
                    className={i === 4 ? "img-four" : ""}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
