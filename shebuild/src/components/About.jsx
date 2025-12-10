import { useRef } from "react";
import { FiCode, FiShield, FiUsers, FiTarget, FiMapPin, FiGlobe } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="relative pt-6 sm:pt-8 md:pt-10 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl sm:max-w-4xl h-72 sm:h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-6"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-mono text-xs sm:text-sm tracking-wider">
              OUR_MISSION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-custom mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              ABOUT US
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "200px" } : {}}
            transition={{ duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-custom leading-relaxed"
          >
            Empowering women to build the future of technology.
          </motion.p>
        </motion.div>

        {/* TWO CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 sm:mb-16">

          {/* SheBuilds Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl transition-all"></div>

            <div className="relative bg-gray-900/40 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-5 sm:p-6 md:p-8">
              
              {/* Title */}
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-custom bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    SHEBUILDS
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-heading">PAN-INDIA COMMUNITY</p>
                </div>
              </div>

              {/* Text */}
              <p className="text-gray-400 text-sm sm:text-base font-heading leading-relaxed">
                A pioneering community empowering women in tech through mentorship, development, and real-world projects.
              </p>

              {/* Tags */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {[
                  ["Mentorship", <FiTarget />],
                  ["Networking", <FiGlobe />],
                  ["Skill Building", null],
                  ["Career Growth", null]
                ].map(([label, icon], i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/30 font-heading">
                    {icon || <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>}
                    <span className="text-xs sm:text-sm text-gray-400">{label}</span>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                  <FiTarget className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-300 text-xs font-heading">BUILDING_THE_FUTURE_TOGETHER</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code & Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>

            <div className="relative bg-gray-900/40 backdrop-blur-md rounded-2xl border border-purple-500/30 p-5 sm:p-6 md:p-8">

              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-custom bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    CODE & CONNECT 3.0
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-heading">CHENNAI FLAGSHIP</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm sm:text-base font-heading leading-relaxed">
                Tamil Nadu's largest women-in-tech conference, delivering transformative workshops and meaningful connections.
              </p>

              <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <FiMapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-xs sm:text-sm font-heading">FLAGSHIP EDITION</span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Culminating our pan-India journey with this premier event.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {["COMMUNITY", "EMPOWERMENT", "TRANSFORMATION"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] sm:text-xs bg-purple-500/20 rounded border border-purple-500/30 text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>

          <div className="relative bg-gray-900/40 backdrop-blur-md rounded-2xl border border-cyan-500/30 p-5 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">

              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <FiShield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h4 className="text-2xl sm:text-3xl text-white font-custom">
                    WHY_WE_BUILD
                  </h4>
                </div>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg font-heading leading-relaxed">
                  To create an inclusive digital ecosystem where women technologists can thrive and lead the next wave of innovation.
                </p>

                <div className="mt-6 pt-4 border-t border-gray-800/50">
                  <p className="text-cyan-300 text-xs sm:text-sm font-heading text-center leading-relaxed">
                    JOIN US TO LEARN, CREATE, AND LEAD — BECAUSE WHEN WOMEN BUILD, THE FUTURE GROWS STRONGER.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
