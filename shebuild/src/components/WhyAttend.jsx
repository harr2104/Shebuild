import { useRef } from "react";
import { FiCode, FiUsers, FiAward, FiZap } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function WhyAttend() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ FIX: Tailwind needs explicit class names, so use a color map
  const colorMap = {
    cyan: {
      border: "border-cyan-500/30",
      bg: "from-cyan-500/20 to-cyan-700/20",
      text: "text-cyan-400",
      circle: "from-cyan-500 to-cyan-600"
    },
    purple: {
      border: "border-purple-500/30",
      bg: "from-purple-500/20 to-purple-700/20",
      text: "text-purple-400",
      circle: "from-purple-500 to-purple-600"
    },
    blue: {
      border: "border-blue-500/30",
      bg: "from-blue-500/20 to-blue-700/20",
      text: "text-blue-400",
      circle: "from-blue-500 to-blue-600"
    },
indigo: {
  border: "border-indigo-500/30",
  bg: "from-indigo-500/20 to-indigo-700/20",
  text: "text-indigo-400",
  circle: "from-indigo-500 to-indigo-600"
}
  };

  const steps = [
    {
      step: "01",
      icon: <FiCode />,
      title: "SKILL UPGRADE",
      description: "Master cutting-edge technologies through immersive workshops",
      color: "cyan"
    },
    {
      step: "02",
      icon: <FiUsers />,
      title: "CONNECT",
      description: "Network with industry leaders and fellow innovators",
      color: "purple"
    },
    {
      step: "03",
      icon: <FiAward />,
      title: "GROW",
      description: "Discover career opportunities with top companies",
      color: "blue"
    },
    {
      step: "04",
      icon: <FiZap />,
      title: "INSPIRE",
      description: "Gain clarity, confidence, and direction to lead your tech journey",
      color: "indigo"
    }
  ];

  return (
    <section
      id="whyattend"
      className="relative py-16 px-4 sm:px-6 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-full max-w-4xl h-96 bg-gradient-to-r 
      from-cyan-500/10 via-purple-500/10 to-blue-500/10 
      rounded-full blur-3xl"></div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14 md:mb-16 px-2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 
            bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-4"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-mono text-sm tracking-wider">WHY_ATTEND</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent font-custom 
            bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              Your Journey
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "200px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto h-0.5 bg-gradient-to-r 
            from-transparent via-cyan-500 to-transparent mb-4"
          />

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-custom leading-relaxed">
            Transform your career through this 4-step immersive experience
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Line (Desktop only) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 
          bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 
          transform -translate-y-1/2 hidden md:block"></div>

          {/* Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 md:gap-8">
            {steps.map((step, index) => {
              const color = colorMap[step.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Number Circle */}
                  <div
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 
                    w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                    bg-gradient-to-r ${color.circle}
                    flex items-center justify-center border-4 border-gray-950 z-10`}
                  >
                    <span className="text-white text-xs sm:text-sm font-bold font-custom">
                      {step.step}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      mt-8 sm:mt-10
                      bg-gray-900/40 backdrop-blur-md rounded-2xl 
                      p-5 sm:p-6 md:p-6 
                      ${color.border}
                      text-center group hover:scale-105 transition-all duration-300
                      flex flex-col justify-between
                      min-h-[220px] sm:min-h-[240px] md:min-h-[260px]
                    `}
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full 
                      bg-gradient-to-r ${color.bg}
                      mx-auto mb-4 flex items-center justify-center 
                      group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={`text-xl sm:text-2xl ${color.text}`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-custom">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
