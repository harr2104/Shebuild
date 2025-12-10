import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiUsers, FiCalendar, FiMail } from "react-icons/fi";
import logo from "../assets/Header_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // Always show navbar for the first 300ms
    setShowHeader(true);

    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 300);

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!firstLoad) {
        if (currentScroll < 10) {
          setShowHeader(true);
        } else {
          if (currentScroll > lastScroll) {
            setShowHeader(false); // scrolling DOWN → hide
          } else {
            setShowHeader(true); // scrolling UP → show
          }
        }
      }

      setLastScroll(currentScroll);
      setScrolled(currentScroll > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll, firstLoad]);

  const navItems = [
    { label: "HOME", path: "#", icon: <FiHome /> },
    { label: "ABOUT", path: "#about", icon: <FiInfo /> },
    { label: "WHY ATTEND", path: "#whyattend", icon: <FiUsers /> },
    { label: "JOURNEY", path: "#projects", icon: <FiCalendar /> },
    { label: "JOIN US", path: "#call", icon: <FiUsers /> },
    { label: "CONTACT", path: "#footer", icon: <FiMail /> },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        pt-4 px-4 md:px-8 lg:px-16
        transition-all duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${scrolled 
          ? "bg-gray-950/90 backdrop-blur-md border-b border-cyan-500/20 py-3"
          : "bg-gray-950/70 backdrop-blur-sm py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start gap-4 md:gap-8">

        {/* Logo */}
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex items-center gap-2">
            <img src={logo} alt="SheBuilds logo" className="w-15 h-12 object-contain" />
            <span className="text-cyan-400 font-mono text-sm tracking-widest">SHEBUILDS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.path)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  text-gray-400 text-sm font-custom hover:text-cyan-400
                  transition flex items-center gap-1 group relative
                "
              >
                <span className="text-cyan-500/60">//</span>
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <div className="hidden md:block ml-auto">
          <button className="shebuilds-btn">
            <strong>REGISTER NOW</strong>
            <div className="sb-stars-container"><div className="sb-stars"></div></div>
            <div className="sb-glow">
              <div className="sb-circle"></div>
              <div className="sb-circle"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-lg rounded-lg border border-gray-800 shadow-xl overflow-hidden">
          <div className="p-3 space-y-1">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  document.querySelector(item.path)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                  w-full px-4 py-3 
                  flex items-center justify-between
                  text-gray-300 font-mono text-sm 
                  hover:bg-gray-800/50 hover:text-cyan-300 
                  transition rounded-lg
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-cyan-500/70">{item.icon}</span>
                  <span>// {item.label}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
              </a>
            ))}

            {/* Mobile Register */}
            <div className="pt-3 border-t border-gray-800/50">
              <button className="
                w-full px-4 py-3 
                rounded-lg border border-cyan-500/30
                bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                text-cyan-400 text-sm font-mono
              ">
                REGISTER FOR EVENT
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
