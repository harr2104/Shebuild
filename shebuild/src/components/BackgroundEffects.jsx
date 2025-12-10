// BackgroundEffects.jsx
import React from "react";

export default function BackgroundEffects() {
  return (
    <>
      {/* Very soft base background — behind everything */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -60,               // ensure it's behind everything
          background: "#020617",
          opacity: 0.6,
        }}
      ></div>

      {/* All other effects behind everything (even further back) */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -70 }}
      >
        {/* Grid (subtle) */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles — pure decorative, all pointer-events none */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              pointerEvents: "none",
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              background: "rgba(255,255,255,0.22)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Orbs (soft glows) */}
        <div
          style={{ zIndex: -71 }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"
        />
        <div
          style={{ zIndex: -71 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 blur-3xl rounded-full"
        />
      </div>
    </>
  );
}
