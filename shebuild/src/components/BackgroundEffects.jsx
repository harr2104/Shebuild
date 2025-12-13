export default function BackgroundEffects() {
  return (
    <>
      {/* Metaverse Background with Holographic Effects */}
      <div className="absolute inset-0 bg-gray-950 "></div>
      
      {/* Holographic Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1.5px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1.5px),
            linear-gradient(rgba(168, 85, 247, 0.05) 1px, transparent 1.5px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.05) 1px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px, 60px 60px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 0 0, 25px 25px, 25px 25px'
        }}
      ></div>
    
      {/* Mild Holographic Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent"></div>
      
      {/* Floating Holographic Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 3 === 0 ? 'rgba(0, 255, 255, 0.3)' : 
                         i % 3 === 1 ? 'rgba(168, 85, 247, 0.3)' : 
                         'rgba(255, 255, 255, 0.2)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated orbs - Enhanced with holographic glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
    </>
  );
}