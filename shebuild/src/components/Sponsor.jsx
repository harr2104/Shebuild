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

export default function Sponsors() {
  const communityPartners = [chennaiReact, nammaFlutter, AIgeeks];
  const partners = [partner1, partner2, partner3, partner4];

  return (
    <section
      id="sponsors"
      className="relative py-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* ================= HEADING ================= */}
      <div className="text-center mb-16">
        <h2
          className="text-3xl sm:text-5xl font-bold font-custom
          bg-clip-text text-transparent
          bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400"
        >
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

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl glow-pulse
              bg-[radial-gradient(circle,rgba(255,240,200,0.45)_0%,rgba(235,215,180,0.32)_40%,rgba(200,180,140,0.18)_65%,transparent_80%)]"
            />
            <div className="flex items-center justify-center h-28">
              <img
                src={ooStudio}
                alt="OO Studio"
                className="object-contain h-20 w-40 md:h-24 md:w-48 lg:h-28"
              />
            </div>
          </div>

          <span className=" text-sm tracking-widest text-gray-300">
            OO STUDIO
          </span>
        </div>

        {/* REC */}
        <div className="relative flex flex-col items-center">
          <span className="mb-4 text-base sm:text-lg font-semibold tracking-wide text-gray-100 uppercase">
            Venue & Refreshment Partner
          </span>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-full blur-3xl glow-pulse
              bg-[radial-gradient(circle,rgba(255,240,200,0.45)_0%,rgba(235,215,180,0.32)_40%,rgba(200,180,140,0.18)_65%,transparent_80%)]"
            />
            <div className="flex items-center justify-center h-28">
              <img
                src={rec}
                alt="Rajalakshmi Engineering College"
                className="object-contain h-20 w-64 md:h-24 md:w-72 lg:h-28"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= COMMUNITY PARTNERS ================= */}
      <div className="mb-24 text-center">
        <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-gray-100">
          COMMUNITY PARTNERS
        </h3>

        <div className="mx-auto mt-3 h-0.5 w-28 bg-gray-500/60" />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-16 max-w-3xl mx-auto">
          {communityPartners.map((logo, i) => (
            <div
              key={i}
              className={`relative flex items-center justify-center
              ${i === communityPartners.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div
                className="absolute inset-0 -z-10 rounded-full blur-3xl glow-pulse
                bg-[radial-gradient(circle,rgba(235,240,245,0.5)_0%,rgba(210,215,220,0.35)_40%,rgba(185,190,195,0.2)_65%,transparent_80%)]"
              />
              <img
                src={logo}
                alt="Community Partner"
                className="h-32 sm:h-36 md:h-40 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= PARTNERS ================= */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-bold tracking-widest text-gray-100">
          PARTNERS
        </h3>

        <div className="mx-auto mt-3 h-0.5 w-24 bg-gray-500/60" />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-16 max-w-5xl mx-auto">
          {partners.map((logo, i) => (
            <div key={i} className="relative flex items-center justify-center">
             <div
  className="absolute inset-0 -z-10 rounded-full blur-[44px] glow-pulse
  bg-[radial-gradient(circle,rgba(235,220,205,0.32)_0%,rgba(215,200,185,0.22)_45%,rgba(195,180,165,0.12)_70%,transparent_85%)]
  scale-135"
/>

              <img
                src={logo}
                alt="Partner"
                className={`object-contain ${
                  i === 0 || i === 2
                    ? "h-36 sm:h-40 md:h-44"
                    : "h-22 sm:h-26 md:h-28"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
