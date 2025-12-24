// Sponsors.jsx
import ooStudio from "../assets/Oos.png";
import rec from "../assets/REC.png";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-3xl sm:text-5xl font-bold font-custom
          bg-clip-text text-transparent
          bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400"
        >
          OUR SPONSORS
        </h2>

        <div
          className="mx-auto mt-4 h-0.5 w-32
          bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />

        <p className="mt-4 text-gray-400 text-sm sm:text-base font-heading">
          Proudly supported by our partners
        </p>
      </div>

      {/* Sponsors Group */}
      <div
        className="
          flex flex-row
          items-center justify-center
          gap-10 sm:gap-14 md:gap-24
        "
      >
        {/* Sponsor 1 */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Glow */}
          <div
            className="
              absolute inset-0
              -z-10
              rounded-full
              blur-2xl
              bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(200,200,200,0.18)_35%,transparent_65%)]
              scale-125
            "
          />

          {/* Logo */}
          <div className="flex items-center justify-center h-28">
            <img
              src={ooStudio}
              alt="OO Studio Inc"
              className="
                object-contain
                h-20 w-40
                md:h-24 md:w-48
                lg:h-28 lg:w-auto
              "
            />
          </div>

          {/* Brand name */}
          <div className="mt-4 text-center">
            <span className="text-sm sm:text-base font-mono tracking-widest text-gray-200">
              OO STUDIO
            </span>
            <div className="mx-auto mt-1 h-px w-10 bg-gray-400/50" />
          </div>
        </div>

        {/* Sponsor 2 */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Glow */}
          <div
            className="
              absolute inset-0
              -z-10
              rounded-full
              blur-2xl
              bg-[radial-gradient(circle,rgba(200,170,255,0.35)_0%,rgba(170,140,255,0.18)_35%,transparent_65%)]
              scale-125
            "
          />

          {/* Logo */}
          <div className="flex items-center justify-center h-28">
            <img
              src={rec}
              alt="Rajalakshmi Engineering College"
              className="
                object-contain
                h-20 w-64
                md:h-24 md:w-72
                lg:h-28 lg:w-auto
              "
            />
          </div>

          {/* Brand name */}
          <div className="mt-4 text-center">
            <span className="text-sm sm:text-base font-mono tracking-widest text-gray-200">
              RAJALAKSHMI ENGINEERING COLLEGE
            </span>
            <div className="mx-auto mt-1 h-px w-16 bg-gray-400/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
