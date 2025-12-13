import { motion } from "framer-motion";
import { FiCalendar, FiGlobe, FiPlay } from "react-icons/fi";

export default function EventDetailsCard() {
  const handleRegisterClick = () => {
    window.open("https://www.google.com", "_blank");
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
        delay: 0.4
      }
    }
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.5
      }
    })
  };

  const dataStreamVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.8
      }
    }
  };

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        boxShadow: "0 0 40px rgba(34, 211, 238, 0.1)",
        borderColor: "rgba(34, 211, 238, 0.4)"
      }}
      className="relative p-4 md:p-5 bg-gray-900/40 backdrop-blur-md rounded-xl border border-cyan-500/20 font-custom"
    >
      <motion.div 
        className="absolute -top-4 left-4 px-2 py-0.5 bg-gray-950 border border-cyan-500/30 rounded-md"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-cyan-400 text-xs">EVENT_DATA</span>
      </motion.div>
      
      <motion.div 
        className="absolute -right-7 -top-6 z-20"
        variants={circleVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center">
          <div 
            className="relative group cursor-pointer"
            onClick={handleRegisterClick}
          >
            <motion.div 
              className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center shadow-2xl shadow-cyan-500/20 group-hover:shadow-cyan-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <text 
                    fill="url(#textGradient)" 
                    fontSize="14"
                    fontWeight="600" 
                    letterSpacing="1"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      • REGISTER NOW • REGISTER NOW • REGISTER NOW •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              <div className="absolute inset-0 rounded-full bg-gray-1000/40 backdrop-blur-sm"></div>
              
              <motion.div 
                className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 backdrop-blur-md border border-cyan-500/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  transition: { 
                    rotate: {
                      duration: 0.8,
                      ease: "linear"
                    }
                  }
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-md"></div>
                <FiPlay className="w-6 h-6 text-white ml-0.5 group-hover:text-cyan-300 transition-colors duration-300" />
              </motion.div>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-sm group-hover:blur-md transition-all duration-300"></div>
            </motion.div>
            
            <div className="absolute -inset-2.5 rounded-full border border-cyan-500/30 animate-pulse-slow"></div>
            
            {/* FIXED: Click to Register Tooltip - Only shows on hover */}
            <div className="
              absolute 
              left-1/2 -translate-x-1/2
              -bottom-9 
              hidden md:block
            ">
              <motion.p 
                className="text-xs text-cyan-300 font-mono whitespace-nowrap bg-gray-900/80 px-2 py-1 rounded-md"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                CLICK TO REGISTER
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Content area with proper spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mr-28 md:mr-0">
        <motion.div 
          className="flex items-start gap-2 md:gap-3"
          custom={0}
          variants={detailItemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="p-1.5 md:p-2 bg-cyan-500/10 rounded-lg flex-shrink-0 mt-0.5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCalendar className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          </motion.div>
          <div className="text-left">
            <p className="text-xs text-gray-500">TIMESTAMP</p>
            <motion.p 
              className="text-white font-medium text-sm md:text-base"
              whileHover={{ x: 5 }}
            >
              31.01.2025 | 9:00 AM - 2:30 PM
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-2 md:gap-3"
          custom={1}
          variants={detailItemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="p-1.5 md:p-2 bg-purple-500/10 rounded-lg flex-shrink-0 mt-0.5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGlobe className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
          </motion.div>
          <div className="text-left">
            <p className="text-xs text-gray-500">LOCATION</p>
            <motion.p 
              className="text-white font-medium text-sm md:text-base"
              whileHover={{ x: 5 }}
            >
              RAJALAKSHMI ENGINEERING COLLEGE, CHENNAI
            </motion.p>
          </div>
        </motion.div>
      </div>
      
      {/* Data stream visualization */}
      <motion.div 
        className="mt-3 pt-3 border-t border-gray-800/50 mr-28 md:mr-0"
        variants={dataStreamVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500 font-heading tracking-wide leading-relaxed">REGISTRATIONS_LIVE</span>
          <motion.span 
            className="text-cyan-400 text-xs font-heading "
            animate={{ 
              opacity: [1, 0.5, 1],
              scale: [1, 1.1, 1]
            }}
        
          >
            ACTIVE
          </motion.span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              className="h-1 flex-1 bg-gradient-to-b from-purple-500/20 to-cyan-500/60 rounded-full"
              variants={barVariants}
              animate={{ 
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}