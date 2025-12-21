import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiUsers, FiCalendar, FiMail } from "react-icons/fi";
import logo from "../assets/Header_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const HERO_HIDE_THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 10);

      if (window.innerWidth < 768) {
        setShowHeader(true);
        return;
      }

      if (currentScroll < HERO_HIDE_THRESHOLD) {
        setShowHeader(true);
      } else {
        if (currentScroll > lastScroll) setShowHeader(false);
        else setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navItems = [
    { label: "HOME", path: "home", icon: <FiHome /> },
    { label: "ABOUT", path: "#about", icon: <FiInfo /> },
    { label: "WHY ATTEND", path: "#whyattend", icon: <FiUsers /> },
    { label: "JOURNEY", path: "#projects", icon: <FiCalendar /> },
    { label: "JOIN US", path: "#call", icon: <FiUsers /> },
    { label: "CONTACT", path: "#footer", icon: <FiMail /> },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-[9999]
        transition-all duration-300

        ${showHeader ? "translate-y-0" : "-translate-y-full"}

        ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-md border-b border-cyan-500/20 py-2 md:py-3"
            : "bg-gray-950/70 backdrop-blur-sm py-3 md:py-4"
        }

        px-4 md:px-6 lg:px-16
      `}
    >
      <div
        className="
          max-w-7xl mx-auto 
          flex items-center 
          justify-between 
          md:justify-start 
          gap-3 md:gap-5 lg:gap-8
        "
      >

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="SheBuilds logo"
            className="
              w-12 h-10 
              md:w-14 md:h-12 
              lg:w-16 lg:h-14 
              object-contain
            "
          />
          <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-widest">
            SHEBUILDS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.path)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                text-gray-400 
                text-xs md:text-sm lg:text-base 
                font-custom hover:text-cyan-400 
                transition flex items-center gap-1 group relative
              "
            >
              <span className="text-cyan-500/60">//</span>
              {item.label}

              <div
                className="
                  absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 
                  group-hover:w-full transition-all duration-300
                "
              ></div>
            </a>
          ))}
        </div>

        {/* TABLET + DESKTOP REGISTER BUTTON */}
        <div className="hidden md:block ml-auto md:scale-90 lg:scale-100">
          <button
            className="shebuilds-btn"
            onClick={() => window.open('https://luma.com/vs98di4e', '_blank')}
          >
            <strong>REGISTER NOW</strong>
            <div className="sb-stars-container"><div className="sb-stars"></div></div>
            <div className="sb-glow">
              <div className="sb-circle"></div>
              <div className="sb-circle"></div>
            </div>
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden mt-4 bg-gray-900/95 backdrop-blur-lg 
            rounded-lg border border-gray-800 
            shadow-xl overflow-hidden
          "
        >
          <div className="p-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="
                  w-full px-4 py-3 flex items-center justify-between
                  text-gray-300 font-mono text-sm 
                  hover:bg-gray-800/50 hover:text-cyan-300 
                  transition rounded-lg
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-cyan-500/70">{item.icon}</span>
                  <span>// {item.label}</span>
                </div>
              </a>
            ))}

            {/* MOBILE REGISTER BUTTON */}
            <div className="pt-3 border-t border-gray-800/50">
              <button
                className="
                  w-full px-4 py-3 rounded-lg border border-cyan-500/30
                  bg-gradient-to-r from-cyan-500/20 to-purple-500/20 
                  text-cyan-400 text-sm font-mono
                "
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                REGISTER FOR EVENT
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
