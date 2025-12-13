import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/Header_logo.png"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Why Attend", href: "#whyattend" },
    { name: "Journey", href: "#projects" },
    { name: "Join Us", href: "#call" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <footer id="footer" className="relative bg-black">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* CONTACT BLOCK */}
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
                  <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center 
                    text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base group-hover:text-cyan-300 transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-400 hover:text-white px-3 py-2 rounded-lg 
                  hover:bg-gray-900/50 transition-all duration-300 text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* SOCIAL MEDIA */}
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
