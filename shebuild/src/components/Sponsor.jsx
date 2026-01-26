// Sponsors.jsx
import ooStudio from "../assets/Oos.png";
import rec from "../assets/REC.png";

// Community partner logos
import chennaiReact from "../assets/chennai-react.png";
import nammaFlutter from "../assets/Namma flutter.png";
import AIgeeks from "../assets/AIgeeks.png";

// Partner logos
import partner1 from "../assets/Interview buddy.png"; 
import partner2 from "../assets/Navan AI.png";
import partner3 from "../assets/Notion.png";
import partner4 from "../assets/xyz-logo-white.png";
import partner5 from "../assets/Wyntrix.png";
import partner6 from "../assets/Mastra.png";

export default function Sponsors() {
  const communityPartners = [
    { logo: chennaiReact, href: "https://www.linkedin.com/company/chennaireact/?originalSubdomain=in" },
    { logo: AIgeeks, href: "https://www.linkedin.com/company/ai-geeks-chennai/" },
    { logo: nammaFlutter, href: "https://www.linkedin.com/company/nammaflutter/" },
  ];

  const partners = [
    { logo: partner1, href: "https://www.linkedin.com/company/interviewbuddy/?originalSubdomain=in" },
    { logo: partner2, href: "https://www.linkedin.com/company/navan-ai/?originalSubdomain=sg" },
    { logo: partner3, href: "https://www.linkedin.com/company/notionhq/?originalSubdomain=in" },
    { logo: partner4, href: "https://www.linkedin.com/company/xyz/" },
    { logo: partner5, href: "https://www.linkedin.com/company/new-partner/" },
    { logo: partner6, href: "https://www.linkedin.com/company/mastra-ai/" },
  ];

  return (
    <section id="sponsors" className="relative py-20 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold font-custom bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">
          SPONSORS & PARTNERS
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <p className="mt-4 text-gray-400 text-sm sm:text-base font-heading">
          Brought to life with our sponsors and partners
        </p>
      </div>

      {/* ================= MAIN SPONSORS ================= */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 mb-24">

        {/* OO STUDIO */}
        <div className="relative flex flex-col items-center">
          <span className="mb-4 text-base sm:text-lg font-semibold tracking-wide text-gray-100 uppercase">
            Powered-By Sponsor
          </span>
          <a href="https://www.linkedin.com/company/oostudioai/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="relative">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl glow-pulse bg-[radial-gradient(circle,rgba(255,230,180,0.95)_0%,rgba(245,205,155,0.65)_22%,rgba(225,180,125,0.42)_42%,rgba(200,155,105,0.24)_62%,transparent_82%)]" />
            <div className="flex items-center justify-center h-28">
              <img src={ooStudio} alt="OO Studio" className="object-contain h-20 w-40 md:h-24 md:w-48 lg:h-28" />
            </div>
          </a>
          <span className="mt-1 text-sm tracking-widest text-gray-300">OO STUDIO</span>
        </div>

        {/* REC */}
        <div className="relative flex flex-col items-center">
          <span className="mb-4 text-base sm:text-lg font-semibold tracking-wide text-gray-100 uppercase">
            Venue & Refreshment Partner
          </span>
          <a href="https://www.linkedin.com/school/rajalakshmi-engineering-college/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="relative">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl glow-pulse bg-[radial-gradient(circle,rgba(255,235,190,0.65)_0%,rgba(240,210,165,0.42)_30%,rgba(215,185,135,0.26)_55%,rgba(190,160,115,0.14)_70%,transparent_82%)]" />
            <div className="flex items-center justify-center h-28">
              <img src={rec} alt="Rajalakshmi Engineering College" className="object-contain h-20 w-64 md:h-24 md:w-72 lg:h-28" />
            </div>
          </a>
        </div>
      </div>

      {/* ================= COMMUNITY PARTNERS ================= */}
      <div className="mb-24 text-center">
        <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-gray-100">COMMUNITY PARTNERS</h3>
        <div className="mx-auto mt-3 h-0.5 w-28 bg-gray-500/60" />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-14 sm:gap-20 max-w-3xl mx-auto">
          {communityPartners.map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={`relative flex items-center justify-center ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
              <div className="absolute inset-0 -z-10 rounded-full blur-[38px] glow-pulse bg-[radial-gradient(circle,rgba(235,240,245,0.46)_0%,rgba(210,215,220,0.32)_60%,transparent_79%)]" />
              <img src={item.logo} alt="Community Partner" className={`community-logo object-contain h-32 sm:h-36 md:h-40 ${i === 2 ? "sm:scale-150" : ""}`} />
            </a>
          ))}
        </div>
      </div>

      {/* ================= PARTNERS ================= */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-gray-100">PARTNERS</h3>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-gray-500/60" />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-0 gap-x-16 sm:gap-16 max-w-5xl mx-auto">
          {partners.map((item, i) => (
  <a
    key={i}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex flex-col items-center justify-center"
  >

              <div className="absolute inset-0 -z-10 rounded-full blur-[28px] sm:blur-[40px] md:blur-[50px] glow-pulse bg-[radial-gradient(circle,rgba(255,235,200,0.66)_0%,rgba(235,210,175,0.40)_26%,rgba(210,185,150,0.22)_48%,rgba(185,160,125,0.12)_70%,transparent_84%)]" />

             <img
  src={item.logo}
  alt="Partner"
  className="object-contain transition-transform duration-300"
/>

{i === 5 && (
  <span className="-mt-7 leading-none text-[12px] sm:text-xs tracking-wide text-gray-300 uppercase">

    Mastra AI
  </span>
)}

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
