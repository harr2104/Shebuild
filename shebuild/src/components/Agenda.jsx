
// import { useState, useEffect, useRef } from "react";
// import { FiClock, FiMapPin, FiUsers, FiVideo, FiCoffee, FiAward, FiCode, FiCpu } from "react-icons/fi";

// export default function Agenda() {
//   const [activeDay, setActiveDay] = useState(1);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-slide-up");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const days = [
//     { id: 1, label: "DAY_01", date: "15.11.2024", theme: "cyan" },
//   ];

//   const sessions = {
//     1: [
//       {
//         time: "09:00 - 10:00",
//         title: "INITIALIZATION",
//         description: "Registration & Welcome Coffee",
//         icon: <FiCoffee />,
//         type: "registration",
//         speaker: "Event Team",
//         location: "Main Lobby"
//       },
//       {
//         time: "10:00 - 11:00",
//         title: "KEYNOTE_OPENING",
//         description: "The Future of Women in Tech: Metaverse Edition",
//         icon: <FiVideo />,
//         type: "keynote",
//         speaker: "Dr. Sarah Chen",
//         location: "Main Auditorium"
//       },
//       {
//         time: "11:30 - 13:00",
//         title: "WORKSHOP_01",
//         description: "Web3 & Smart Contracts: Building in the Metaverse",
//         icon: <FiCode />,
//         type: "workshop",
//         speaker: "Elena Rodriguez",
//         location: "Lab A"
//       },
//       {
//         time: "14:00 - 16:00",
//         title: "PANEL_DISCUSSION",
//         description: "Breaking Barriers: Women Leading in Tech",
//         icon: <FiUsers />,
//         type: "panel",
//         speaker: "Industry Leaders",
//         location: "Conference Hall"
//       },
//       {
//         time: "16:30 - 18:00",
//         title: "HACKATHON_START",
//         description: "Innovation Challenge Kickoff",
//         icon: <FiCode />,
//         type: "hackathon",
//         speaker: "Mentor Team",
//         location: "Innovation Hub"
//       },
//       {
//         time: "19:00 - 21:00",
//         title: "NETWORKING_SESSION",
//         description: "Connect with Industry Professionals",
//         icon: <FiUsers />,
//         type: "networking",
//         speaker: "All Participants",
//         location: "Networking Lounge"
//       }
//     ]
//   };

//   const getTypeColor = (type) => {
//     switch(type) {
//       case 'keynote': return 'from-cyan-500/20 to-blue-500/20';
//       case 'workshop': return 'from-purple-500/20 to-pink-500/20';
//       case 'panel': return 'from-blue-500/20 to-cyan-500/20';
//       case 'hackathon': return 'from-green-500/20 to-cyan-500/20';
//       case 'networking': return 'from-pink-500/20 to-purple-500/20';
//       case 'awards': return 'from-yellow-500/20 to-orange-500/20';
//       case 'registration': return 'from-gray-500/20 to-gray-700/20';
//       default: return 'from-gray-500/20 to-gray-700/20';
//     }
//   };

//   const getTypeLabel = (type) => {
//     switch(type) {
//       case 'keynote': return 'KEYNOTE';
//       case 'workshop': return 'WORKSHOP';
//       case 'panel': return 'PANEL';
//       case 'hackathon': return 'HACKATHON';
//       case 'networking': return 'NETWORKING';
//       case 'awards': return 'AWARDS';
//       case 'registration': return 'REGISTRATION';
//       default: return 'SESSION';
//     }
//   };

//   return (
//     <section className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen">
//       {/* Animated Timeline Background */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12 md:mb-16 animate-on-scroll" ref={el => cardsRef.current[0] = el}>
//           <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/50 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
//             <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
//             <span className="text-blue-400 font-mono text-xs tracking-widest">EVENT_TIMELINE</span>
//           </div>
          
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent font-custom bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">

//               AGENDA
//             </span>
//           </h2>

          
//           <div className="max-w-2xl mx-auto">
//             <p className="text-gray-400 text-lg">
//               Navigate through our immersive experience in the digital frontier
//             </p>
//           </div>
//         </div>

//         {/* Timeline - Using the alternating left-right layout */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Vertical timeline line in center */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-blue-500/30 transform -translate-x-1/2"></div>
          
//           <div className="space-y-8">
//             {sessions[activeDay].map((session, index) => (
//               <div
//                 key={index}
//                 ref={el => cardsRef.current[index + 1] = el}
//                 className={`relative flex flex-col md:flex-row items-start gap-6 animate-on-scroll ${
//                   index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                 }`}
//               >
//                 {/* Time indicator - Left side for even, Right side for odd */}
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
//                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-gray-900/80 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300">
//                     <FiClock className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
//                     <span className="font-mono text-sm text-white">{session.time}</span>
//                   </div>
//                 </div>
                
//                 {/* Center dot */}
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-950 z-10"></div>
                
//                 {/* Session card - Using your original UI design */}
//                 <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
//                   <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800/50 p-5 md:p-6 hover:border-cyan-500/30 transition-all duration-300 group">
//                     <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(session.type)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
//                     <div className="relative z-10">
//                       {/* Session header */}
//                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
//                         <div>
//                           <div className="inline-flex items-center gap-2 mb-2">
//                             <span className={`px-2 py-1 rounded-md text-xs font-mono bg-gradient-to-r ${getTypeColor(session.type)} border border-${session.type === 'keynote' ? 'cyan' : session.type === 'workshop' ? 'purple' : session.type === 'hackathon' ? 'green' : 'blue'}-500/30`}>
//                               {getTypeLabel(session.type)}
//                             </span>
//                             <div className="flex items-center gap-2 text-gray-400 text-sm">
//                               <FiClock className="w-3 h-3" />
//                               <span>{session.time}</span>
//                             </div>
//                           </div>
                          
//                           <h3 className="text-xl font-bold text-white mb-2 font-mono">{session.title}</h3>
//                           <p className="text-gray-300 text-sm md:text-base">{session.description}</p>
//                         </div>
                        
//                         <div className="text-3xl text-gray-700 group-hover:text-cyan-400 transition-colors duration-300">
//                           {session.icon}
//                         </div>
//                       </div>

//                       {/* Session details */}
//                       <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800/50">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
//                             <FiUsers className="w-4 h-4 text-cyan-400" />
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500">SPEAKER</div>
//                             <div className="text-sm text-white">{session.speaker}</div>
//                           </div>
//                         </div>
                        
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
//                             <FiMapPin className="w-4 h-4 text-purple-400" />
//                           </div>
//                           <div>
//                             <div className="text-xs text-gray-500">LOCATION</div>
//                             <div className="text-sm text-white">{session.location}</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Legend */}
        
//       </div>
//     </section>
//   );
// }


import { useRef } from "react";
import { FiClock, FiMapPin, FiUsers, FiVideo, FiCoffee, FiCode } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

export default function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sessions = [
    {
      time: "09:00 - 10:00",
      title: "INITIALIZATION",
      description: "Registration & Welcome Coffee",
      icon: <FiCoffee />,
      type: "registration",
      speaker: "Event Team",
      location: "Main Lobby"
    },
    {
      time: "10:00 - 11:00",
      title: "KEYNOTE_OPENING",
      description: "The Future of Women in Tech: Metaverse Edition",
      icon: <FiVideo />,
      type: "keynote",
      speaker: "Dr. Sarah Chen",
      location: "Main Auditorium"
    },
    {
      time: "11:30 - 13:00",
      title: "WORKSHOP_01",
      description: "Web3 & Smart Contracts: Building in the Metaverse",
      icon: <FiCode />,
      type: "workshop",
      speaker: "Elena Rodriguez",
      location: "Lab A"
    },
    {
      time: "14:00 - 16:00",
      title: "PANEL_DISCUSSION",
      description: "Breaking Barriers: Women Leading in Tech",
      icon: <FiUsers />,
      type: "panel",
      speaker: "Industry Leaders",
      location: "Conference Hall"
    },
    {
      time: "16:30 - 18:00",
      title: "HACKATHON_START",
      description: "Innovation Challenge Kickoff",
      icon: <FiCode />,
      type: "hackathon",
      speaker: "Mentor Team",
      location: "Innovation Hub"
    },
    {
      time: "19:00 - 21:00",
      title: "NETWORKING_SESSION",
      description: "Connect with Industry Professionals",
      icon: <FiUsers />,
      type: "networking",
      speaker: "All Participants",
      location: "Networking Lounge"
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'keynote': return 'from-cyan-500/20 to-blue-500/20';
      case 'workshop': return 'from-purple-500/20 to-pink-500/20';
      case 'panel': return 'from-blue-500/20 to-cyan-500/20';
      case 'hackathon': return 'from-green-500/20 to-cyan-500/20';
      case 'networking': return 'from-pink-500/20 to-purple-500/20';
      case 'registration': return 'from-gray-500/20 to-gray-700/20';
      default: return 'from-gray-500/20 to-gray-700/20';
    }
  };

  const getTypeLabel = (type) => {
    switch(type) {
      case 'keynote': return 'KEYNOTE';
      case 'workshop': return 'WORKSHOP';
      case 'panel': return 'PANEL';
      case 'hackathon': return 'HACKATHON';
      case 'networking': return 'NETWORKING';
      case 'registration': return 'REGISTRATION';
      default: return 'SESSION';
    }
  };

  return (
    <section id="agenda" className="relative py-16 px-4 md:px-8 lg:px-16 min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30 mb-6"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-mono text-sm tracking-wider">EVENT_TIMELINE</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold font-custom mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
              AGENDA
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: "150px" } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto w-48    h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-custom tracking-wide leading-relaxed"
          >
            Navigate through our immersive experience in the digital frontier
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto font-heading tracking-wide leading-relaxed">
          {/* Vertical timeline line in center */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-blue-500/30 transform -translate-x-1/2 origin-top"
          ></motion.div>
          
          <div className="space-y-8">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Time indicator */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-gray-900/80 backdrop-blur-sm group hover:border-cyan-500/50 transition-all duration-300">
                    <FiClock className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-mono text-sm text-white">{session.time}</span>
                  </div>
                </div>
                
                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) + 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-gray-950 z-10"
                ></motion.div>
                
                {/* Session card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900/40 backdrop-blur-md rounded-2xl border border-gray-800/50 p-5 md:p-6 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(session.type)} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Session header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-md text-xs font-mono bg-gradient-to-r ${getTypeColor(session.type)} border border-${session.type === 'keynote' ? 'cyan' : session.type === 'workshop' ? 'purple' : session.type === 'hackathon' ? 'green' : 'blue'}-500/30`}>
                              {getTypeLabel(session.type)}
                            </span>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <FiClock className="w-3 h-3" />
                              <span>{session.time}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 font-custom tracking-wide leading-relaxed">{session.title}</h3>
                          <p className="text-gray-300 text-sm md:text-base">{session.description}</p>
                        </div>
                        
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="text-3xl text-gray-700 group-hover:text-cyan-400 transition-colors duration-300"
                        >
                          {session.icon}
                        </motion.div>
                      </div>

                      {/* Session details */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800/50">
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center"
                          >
                            <FiUsers className="w-4 h-4 text-cyan-400" />
                          </motion.div>
                          <div>
                            <div className="text-xs text-gray-500">SPEAKER</div>
                            <div className="text-sm text-white">{session.speaker}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center"
                          >
                            <FiMapPin className="w-4 h-4 text-purple-400" />
                          </motion.div>
                          <div>
                            <div className="text-xs text-gray-500">LOCATION</div>
                            <div className="text-sm text-white">{session.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        
      </div>
    </section>
  );
}