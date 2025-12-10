export default function BackgroundEffects() {
  return (
    <>
      {/* Very soft base background, DOES NOT interfere with header */}
      <div className="fixed inset-0 bg-[#020617] opacity-60 -z-20 pointer-events-none"></div>

      {/* All other effects behind everything */}
      <div className="fixed inset-0 -z-30 pointer-events-none">

        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              background: "rgba(255,255,255,0.3)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 blur-3xl rounded-full"></div>
      </div>
    </>
  );
}
