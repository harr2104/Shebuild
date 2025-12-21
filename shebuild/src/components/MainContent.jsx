import { motion } from "framer-motion";
import hero from "../assets/bg_1.png";
import EventDetailsCard from "./EventDetailsCard";

export default function MainContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.85 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "backOut" }
    }
  };

  const gradientLineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "140px",
      opacity: 1,
      transition: { duration: 1, delay: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="
        flex flex-col lg:flex-row 
        items-center justify-center 
        px-4 sm:px-6 md:px-10 lg:px-16 
        pb-10 md:pb-16 pt-10 sm:pt-12 md:pt-14
        gap-8 md:gap-12 
mt-[50px] sm:mt-[60px] md:mt-[40px] lg:mt-[50px]
      "
      id = "home"
    >

      {/* IMAGE */}
      <motion.div
        variants={imageVariants}
        className="
          w-full lg:w-1/2 
          flex justify-center items-center
          order-1 lg:order-2 
        "
      >
        <motion.img
          src={hero}
          alt="Women in Tech Community"
          className="
            w-[80%] max-w-[280px]
            sm:max-w-[340px] 
            md:max-w-[420px] 
            lg:max-w-[520px] 
            object-contain drop-shadow-2xl 
            mt-2 sm:mt-4 md:mt-8 lg:mt-0
          "
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        variants={textVariants}
        className="
          w-full lg:w-1/2 
          space-y-4 sm:space-y-6 
          order-2 lg:order-1
          text-center lg:text-left
        "
      >

        {/* TITLE */}
        <motion.div className="relative" variants={titleVariants}>
          <h1 className="font-bold leading-none">

            {/* LINE 1 */}
            <motion.span
              className="
                block font-custom 
                text-5xl sm:text-6xl md:text-7xl 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 
                animate-pulse
              "
            >
              CODE &
            </motion.span>

            {/* LINE 2 */}
            <motion.span
              className="
                block mt-2 font-custom 
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                bg-clip-text text-transparent 
                bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 
                animate-pulse
              "
            >
              CONNECT 3.0
            </motion.span>
          </h1>
        </motion.div>

        {/* SUBTITLE LINE — now BEFORE mobile button */}
        <motion.div className="relative flex justify-center lg:justify-start" variants={titleVariants}>
          <motion.div
            className="h-0.5 bg-gradient-to-r from-cyan-500 to-transparent mb-2"
            style={{ width: "140px" }}
            variants={gradientLineVariants}
          />
        </motion.div>

        {/* MOBILE REGISTER BUTTON (below line now) */}
        <div className="block md:hidden mt-3 mb-2">
          <button
            className="shebuilds-btn mx-auto"
            onClick={() => window.open("https://luma.com/vs98di4e", "_blank")}
          >
            <strong>CLICK TO REGISTER</strong>
            <div className="sb-stars-container"><div className="sb-stars"></div></div>
            <div className="sb-glow">
              <div className="sb-circle"></div>
              <div className="sb-circle"></div>
            </div>
          </button>
        </div>

         

        {/* SUBTITLE */}
        <motion.div className="relative" variants={titleVariants}>
     
          <motion.h2 
            className="text-sm sm:text-base md:text-xl font-custom text-gray-400 tracking-wide leading-relaxed"
          >
            Empowering women in tech to innovate and lead.
          </motion.h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div 
          className="space-y-3 font-custom max-w-xl mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 font-heading leading-relaxed text-sm sm:text-base">
           A flagship learning and networking experience empowering women in tech to gain industry exposure, build meaningful connections, and become future ready leaders. Open to all who support an inclusive tech ecosystem.
          </p>
        </motion.div>

        {/* EVENT DETAILS */}
        <motion.div 
          className="pt-3 sm:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <EventDetailsCard />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
