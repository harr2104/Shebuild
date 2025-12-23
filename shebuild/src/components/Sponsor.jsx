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
        className="    flex flex-row
    items-center justify-center
    gap-6 sm:gap-8 md:gap-20"
      >
        {/* Logo 1 */}
        <img
          src={ooStudio}
          alt="OO Studio Inc"
          className="
            object-contain
            h-14 w-28
            sm:h-16 sm:w-32
            md:h-20 md:w-40
            lg:h-24 lg:w-auto
          "
        />

        {/* Logo 2 */}
        <img
          src={rec}
          alt="Rajalakshmi Engineering College"
          className="
            object-contain
            h-14 w-44
            sm:h-16 sm:w-56
            md:h-20 md:w-64
            lg:h-24 lg:w-auto
          "
        />
      </div>
    </section>
  );
}
