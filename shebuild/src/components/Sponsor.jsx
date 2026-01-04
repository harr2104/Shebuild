// Sponsors.jsx
import ooStudio from "../assets/Oos.png";
import rec from "../assets/REC.png";

// Community partner logos
import chennaiReact from "../assets/chennai-react.png";
import nammaFlutter from "../assets/Namma flutter.png";

// Partner logos
import partner1 from "../assets/Interview buddy.png";
import partner2 from "../assets/Navan AI.png";
import partner3 from "../assets/Notion.png";
import partner4 from "../assets/xyz-logo-white.png";

export default function Sponsors() {
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
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl
              bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(225,225,225,0.35)_40%,rgba(200,200,200,0.15)_65%,transparent_80%)]
              scale-140"
            />
            <div className="flex items-center justify-center h-28">
              <img
                src={ooStudio}
                alt="OO Studio"
                className="object-contain h-20 w-40 md:h-24 md:w-48 lg:h-28"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-base sm:text-lg font-mono tracking-widest text-gray-100">
              OO STUDIO
            </span>
            <div className="mx-auto mt-1 h-px w-10 bg-gray-400/70" />
          </div>
        </div>

        {/* REC */}
        <div className="relative flex flex-col items-center">
          <span className="mb-4 text-base sm:text-lg font-semibold tracking-wide text-gray-100 uppercase">
            Venue & Refreshment Partner
          </span>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl
              bg-[radial-gradient(circle,rgba(220,200,255,0.55)_0%,rgba(190,160,255,0.35)_40%,rgba(160,130,255,0.15)_65%,transparent_80%)]
              scale-140"
            />
            <div className="flex items-center justify-center h-28">
              <img
                src={rec}
                alt="Rajalakshmi Engineering College"
                className="object-contain h-20 w-64 md:h-24 md:w-72 lg:h-28"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-base sm:text-lg font-mono tracking-widest text-gray-100">
              RAJALAKSHMI ENGINEERING COLLEGE
            </span>
            <div className="mx-auto mt-1 h-px w-16 bg-gray-400/70" />
          </div>
        </div>
      </div>

      {/* ================= COMMUNITY PARTNERS ================= */}
      <div className="mb-24 text-center">
        <h3
          className="
            text-xl sm:text-2xl font-bold tracking-widest
            bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#f5f5f5,#d4d4d8,#f5f5f5)]
            inline-block
          "
        >
          COMMUNITY PARTNERS
        </h3>

        <div className="mx-auto mt-3 h-0.5 w-28 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

        <div className="mt-14 grid grid-cols-2 gap-16 max-w-2xl mx-auto">
          {[
            { name: "CHENNAI REACT", logo: chennaiReact },
            { name: "NAMMA FLUTTER", logo: nammaFlutter },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="absolute inset-0 -z-10 rounded-full blur-3xl
                bg-[radial-gradient(circle,rgba(255,255,255,0.42)_0%,rgba(220,220,220,0.28)_40%,transparent_72%)]
                scale-130"
              />
              <img
                src={item.logo}
                alt={item.name}
                className="h-24 sm:h-28 md:h-32 object-contain"
              />
              <div className="mt-4 text-center">
                <span className="text-base sm:text-lg font-mono tracking-widest text-gray-200">
                  {item.name}
                </span>
                <div className="mx-auto mt-1 h-px w-10 bg-gray-400/70" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PARTNERS ================= */}
      <div className="text-center">
        <h3
          className="text-xl sm:text-2xl font-bold tracking-widest inline-block"
          style={{
            background: "linear-gradient(90deg, #e5e7eb, #d1d5db, #e5e7eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          PARTNERS
        </h3>

        <div className="mx-auto mt-3 h-0.5 w-24 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-16 max-w-5xl mx-auto">
          {[
            { name: "Interview Buddy", logo: partner1, boost: true },
            { name: "Navan AI", logo: partner2 },
            { name: "Notion", logo: partner3, boost: true },
            { name: "XYZ", logo: partner4 },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div
                className={`absolute inset-0 -z-10 rounded-full blur-3xl
                ${
                  item.boost
                    ? "bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(225,225,225,0.35)_40%,rgba(200,200,200,0.18)_65%,transparent_80%)] scale-135"
                    : "bg-[radial-gradient(circle,rgba(255,255,255,0.42)_0%,rgba(220,220,220,0.25)_40%,transparent_70%)] scale-125"
                }`}
              />
              <img
                src={item.logo}
                alt={item.name}
                className="h-20 sm:h-24 md:h-28 object-contain"
              />
              <div className="mt-4 text-center">
                <span className="text-base sm:text-lg font-mono tracking-widest text-gray-200">
                  {item.name}
                </span>
                <div className="mx-auto mt-1 h-px w-8 bg-gray-400/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
