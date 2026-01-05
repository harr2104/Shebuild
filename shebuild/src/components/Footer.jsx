import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/Header_logo.png"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      text: "keerthana.shebuilds@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=keerthana.shebuilds@gmail.com",
    },
    {
      icon: <FiPhone />,
      text: "+91 94450 87093",
      href: "tel:+919445087093",
    },
    {
      icon: <FiMapPin />,
      text: "Chennai, India",
      href: "https://www.google.com/maps/search/Chennai%2C+Chennai%2C+India/?hl=en",
    },
  ];

  const socialLinks = [
    {
      icon: <FiInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/shebuilds_chennai?igsh=MXVndDBsdGwyYjZwNA==",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/shebuildshack",
    },
  ];

  const technicalSupport = [
    {
      name: "Harini",
      // role: "Lead Developer",
      linkedin: "https://www.linkedin.com/in/harini-sundaram-04a615334/",
    },
    {
      name: "Jeffrin",
      // role: "Tech Support",
      linkedin: "https://www.linkedin.com/in/jeffrin-p-06064a253/",
    },

  ];

  // Quick links with section IDs
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Why Attend", id: "whyattend" },
    { name: "Journey", id: "projects" },
    { name: "Join Us", id: "call" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <footer id="footer" className="relative bg-black">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12">

        {/* TOP GRID - Reordered as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">

          {/* 1. Get in Touch */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Get in Touch</h3>
            <div className="space-y-5">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center 
                    text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - with smooth scrolling */}
          <div className="space-y-6 ml-0 sm:ml-0 lg:ml-8">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-2 gap-x-4">
                {quickLinks.slice(0, 2).map((link, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 hover:text-teal-300 py-2 rounded-lg 
                      transition-all duration-300 text-sm cursor-pointer
                      text-left group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                {quickLinks.slice(2, 4).map((link, index) => (
                  <motion.button
                    key={index + 2}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 hover:text-teal-300 py-2 rounded-lg 
                      transition-all duration-300 text-sm cursor-pointer
                      text-left group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-4">
                {quickLinks.slice(4, 6).map((link, index) => (
                  <motion.button
                    key={index + 4}
                    onClick={() => scrollToSection(link.id)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index + 4) * 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 hover:text-teal-300 py-2 rounded-lg 
                      transition-all duration-300 text-sm cursor-pointer
                      text-left group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Technical Support - with third name moved to center */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <FiUsers className="text-cyan-400" />
              <h3 className="text-white font-bold text-lg">Web Development Team</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {technicalSupport.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full 
                        bg-gray-900/60 hover:bg-gray-800/70 border border-gray-800/50 
                        hover:border-cyan-500/40 transition-all duration-300"
                    >
                      <span className="text-gray-300 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        {person.name}
                      </span>
                      
                      {/* LinkedIn icon - hidden by default, shows on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 
                        transition-all duration-300">
                        <FiLinkedin className="text-cyan-400 text-xs" />
                      </div>
                    </a>
                    
                    {/* Role tooltip on hover */}
                    {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 
                      bg-gray-900 text-gray-300 text-xs rounded-md opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10
                      border border-gray-800 shadow-lg">
                      {person.role}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                        border-4 border-transparent border-t-gray-900"></div>
                    </div> */}
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-2">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mr-16">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60"></span>
                  <p>Connect on LinkedIn</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Connect With Us - moved to last position */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 
                    hover:text-white hover:bg-gray-800 transition-all duration-300"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm sm:text-base">
              Follow us for updates and community highlights
            </p>
          </div>

        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="SheBuilds logo" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold text-lg">SheBuilds</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-sm text-center"
          >
            © {currentYear} SheBuilds. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-500 text-sm text-center"
          >
            Building the future, one woman at a time
          </motion.div>
        </div>

      </div>
    </footer>
  );
}