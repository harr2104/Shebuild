// BackgroundEffects.jsx
import React from "react";

export default function BackgroundEffects() {
  return (
    <>
      {/* STATIC BASE BACKGROUND — renders instantly, no fade = NO FLASH */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: -9999,
          background: "#020617",   // solid dark navy
        }}
      />

      {/* Decorative Layer Behind Everything */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -10000 }}
      >
        {/* Soft Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Particles */}
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

        {/* Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 blur-3xl rounded-full" />
      </div>
    </>
  );
}
