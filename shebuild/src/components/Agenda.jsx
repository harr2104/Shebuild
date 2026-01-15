import { useRef } from "react";
import {
  FiMic,
  FiUsers,
  
  FiCoffee,
  FiMessageCircle,
  FiZap,
  FiShield,
  FiCpu,
  FiCheckCircle,
  FiCode,
} from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sessions = [
    {
      time: "09:00 - 09:30",
      title: "Inaugration",
      description: "Opening Ceremony & Welcome Address",
      icon: <FiZap />,
      
      speaker: "Event Team",
    },
    {
      time: "09:30 - 10:00",
      title: "Talk 01",
      description: "\"Engineering for Privacy,Security and Trust in SAAS\"",
      icon: <FiShield />,
     
      speaker: "Rajalakshmi Srinivasan",
    },
    {
      time: "10:00 - 10:30",
      title: "Talk 02",
      description: "\"AI Agents on the Cloud : Your New Teammates in 2026\"",
      icon: <FiCpu />,
      type: "keynote",
      speaker: "Mahathi",
    },
    {
      time: "10:30 - 10:45",
      type: "break",
      label: "SHORT BREAK",
      icon: <FiCoffee />,
    },
    {
      time: "10:45 - 11:00",
      title: "Sponsor Talk",
      description: "( Insights from Our Sponsor )",
      icon: <FiUsers />,
      type: "panel",
      speaker: "To Be Announced",
    },
    {
      time: "11:00 - 11:40",
      title: "Panel Discussion",
      description: "( Panel Discussion Session )",
      icon: <FiUsers />,
      type: "panel",
      speaker: "To Be Announced",
    },
    {
      time: "11:40 - 12:00",
      title: "Lightning Talks",
      description: " ( Fast-paced Lightning Talks )",
      icon: <FiZap />,
      type: "workshop",
      speaker: "To Be Announced",
    },
    {
      time: "12:00 - 13:00",
      type: "break",
      label: "LUNCH BREAK",
      icon: <FiCoffee />,
    },
    {
      time: "13:00 - 13:30",
      title: "Talk 03",
      description: "\" Building a First Principle Open-source Project\"",
      icon: <FiCode />,
      type: "keynote",
      speaker: "Meerthika S R",
    },
    {
      time: "13:30 - 14:00",
      title: "AMA Session",
      description: "( Hiring Guidance & AMA )",
      icon: <FiMessageCircle />,
      type: "networking",
      speaker: "To Be Announced",
    },
    {
      time: "14:00 - 14:30",
      title: "Conclusion",
      description: "Event Wrap-up & Closing Notes",
      icon: <FiCheckCircle/>,
      type: "registration",
      speaker: "Event Team",
    },
  ];

  const getTypeLabel = (type) => {
    switch (type) {
      case "keynote":
        return "TALK";
      case "workshop":
        return "LIGHTNING";
      case "panel":
        return "PANEL";
      case "networking":
        return "AMA";
      default:
        return "SESSION";
    }
  };

  // ✅ visual index for zig-zag (ignores breaks)
  let visualIndex = 0;

  return (
    <section
      id="agenda"
      className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold font-custom">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              AGENDA
            </span>
          </motion.h2>

          <div className="mx-auto mt-4 h-0.5 w-36 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          <p className="mt-5 text-gray-400 text-base md:text-lg font-custom">
            A full walkthrough of the day — sessions, talks, and key moments
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">
         <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-blue-500/30 -translate-x-1/2" />


          <div className="space-y-10">
            {sessions.map((session, index) => {
              if (session.type === "break") {
                return (
                  <div
                    key={index}
                    className="relative flex items-center justify-center text-gray-400 gap-3"
                  >
                    <FiCoffee className="text-xl text-cyan-400" />
                    <span className="font-mono tracking-widest text-sm">
                      {session.time} — {session.label}
                    </span>
                  </div>
                );
              }

              const isLeft = visualIndex % 2 === 0;
              visualIndex++;

              return (
               <motion.div
  key={index}
  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: visualIndex * 0.1 }}
  className={`relative flex flex-col md:flex-row gap-6 ${
    isLeft ? "md:flex-row" : "md:flex-row-reverse"
  }`}
>

                  <div
  className={`flex-1 text-center ${
    isLeft ? "md:text-right md:pr-6" : "md:text-left md:pl-6"
  }`}
>

                    <span className="font-mono text-sm text-cyan-400">
                      {session.time}
                    </span>
                  </div>

                <div className="hidden md:block absolute left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full -translate-x-1/2 border-4 border-gray-950 z-10" />


                  <div className="flex-1">
                    <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800/50 p-6">
                      <div className="mb-3 flex items-center gap-3">
                      
                        <div className="text-2xl text-cyan-400">
                          {session.icon}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">
                        {session.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {session.description}
                      </p>

                      <div className="flex items-center gap-3 text-sm">
                        <FiUsers className="text-cyan-400" />
                        <span className="text-gray-300">
                          {session.speaker}
                        </span>
                      </div>
                    </div>
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
