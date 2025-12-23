import { useRef, useState, useEffect } from "react";
import { FiDollarSign, FiUsers, FiMic, FiCheck, FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CallPage() {
  const [isInView, setIsInView] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const checkScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
          setIsInView(true);
        }
      }
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="call"
      className="
        relative
        pt-12 sm:pt-16 md:pt-20
        pb-16 sm:pb-20 md:pb-24
        px-4 sm:px-6 md:px-8 lg:px-16
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950/40"></div>
      <div className="absolute top-1/4 left-4 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-4 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-purple-500/5 rounded-full blur-2xl"></div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">

        {/* TITLE SECTION */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 
            bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-mono text-xs sm:text-sm tracking-wider">
              CONTRIBUTE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r 
            from-cyan-400 via-purple-400 to-cyan-400 font-custom">
              JOIN US
            </span>
          </h1>

          <div className="mx-auto h-0.5 w-28 sm:w-40 bg-gradient-to-r 
          from-transparent via-cyan-500 to-transparent mb-4"></div>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-custom">
            Here's how you can contribute to empowering more women in tech.
          </p>
        </motion.div>

        {/* FEATURED SPONSOR CARD */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-12 mt-4 sm:mt-8"
        >
          <div className="absolute inset-0 sm:-inset-4 bg-gradient-to-r 
            from-cyan-500/20 via-blue-500/20 to-cyan-500/20 
            rounded-3xl blur-xl"></div>

          <div className="relative bg-gradient-to-br 
            from-gray-900/60 to-gray-800/40 backdrop-blur-md 
            rounded-2xl border-2 border-cyan-500/30 p-6 sm:p-8 overflow-hidden"
          >
            <motion.div variants={scaleIn} 
              className="absolute top-2 right-2 sm:top-6 sm:right-6 ">
              <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 
              rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
              border border-cyan-500/30 ">
                <FiTarget className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-cyan-300 text-xs sm:text-sm font-custom">
                  FEATURED OPPORTUNITY
                </span>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
              
              {/* LEFT */}
              <div className="lg:w-2/3">
                <motion.div variants={slideInLeft} className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl 
                  bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                  flex items-center justify-center border border-cyan-500/30 mt-4">
                    <FiDollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 " />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-custom mt-2  ">
                      SPONSORSHIP PARTNERSHIP
                    </h3>
                    <p className="text-cyan-300 text-sm font-heading">
                      PREMIUM BRAND ASSOCIATION
                    </p>
                  </div>
                </motion.div>

                <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 font-heading">
                  Partner with the movement that’s transforming women's careers in tech.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-heading">
                  {[
                    "Brand association with India’s premier women-in-tech community",
                    "Access to elite talent pipeline of 1000+ women technologists",
                    "Featured in all digital and on-ground communications",
                    "VIP networking with industry leaders",
                    "Exclusive recruitment opportunities"
                  ].map((b, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                    >
                      <FiCheck className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5" />
                      <span className="text-gray-400 text-sm">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <motion.div variants={slideInRight} className="lg:w-1/3">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800/50">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-4 font-custom ">
                    SPONSORSHIP TIERS
                  </h4>

                  <div className="space-y-4">
                    {[
                      { name: "Chennai Regional Title Sponsor", color: "from-cyan-500 to-blue-500" },
                      { name: "Regionally Powered By sponsor", color: "from-purple-500 to-pink-500" },
                      { name: "Regionally Co-Powered By sponsor", color: "from-blue-500 to-cyan-500" },
                    ].map((tier, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-gradient-to-r 
                        from-gray-800/50 to-gray-900/50 border border-gray-700/50"
                      >
                        <div className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color} 
                        text-lg mb-2`}>
                          {tier.name}
                        </div>
                        <div className="text-gray-400 text-sm">Comprehensive benefits package</div>
                      </div>
                    ))}
                  </div>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=keerthana.shebuilds@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 block text-center w-full py-3 bg-gradient-to-r 
  from-cyan-500 to-blue-500 text-white rounded-lg text-sm sm:text-base"
>
  FUEL WOMEN IN TECH
</a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

    {/* ===================================================== */}
        {/* SHARE AS SPEAKER — SAME DESIGN SYSTEM AS WHY_ATTEND */}
        {/* ===================================================== */}

        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="
            relative
            mx-auto
            w-full max-w-md
            lg:max-w-[680px]
          "
        >
          {/* Subtle ambient glow (WhyAttend-style, not flashy) */}
          <div className="
            absolute inset-0
            bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10
            rounded-2xl blur-2xl
          " />

          <div className="
            relative
            bg-gray-900/40 backdrop-blur-md
            rounded-2xl
            border border-gray-800/50
            p-6 sm:p-8
            hover:scale-[1.02]
            transition-transform duration-300
          ">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full 
                bg-gradient-to-r from-cyan-500/20 to-blue-500/20
                flex items-center justify-center border border-cyan-500/30">
                <FiMic className="text-2xl text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-500 font-custom">
                  SHARE AS SPEAKER
                </h3>
                <p className="text-gray-400">
                  Inspire the next generation with your journey.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {[
                "Impact 1000+ women",
                "Share domain expertise",
                "Join a national speaker network",
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">{b}</span>
                </div>
              ))}
            </div>

            <button
              className="w-full py-3 rounded-lg 
              bg-gradient-to-r from-cyan-500 to-blue-500 
              text-white font-semibold"
              onClick={() => window.open('https://forms.gle/X7p3eh8WBbiTr9Nw9', '_blank')}
            >
              Apply to Speak
            </button>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
