import React, { useMemo } from "react";

interface PresetPreviewProps {
  name: string;
  category: "lettering" | "monogram" | "vector";
  isSelected: boolean;
}

/* ---------------- SHARED TEXTURE ---------------- */
// Adds a technical grid and CRT scanline feel
const BackgroundMatrix = () => (
  <>
    <div 
      className="absolute inset-0 opacity-20 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '8px 8px'
      }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay z-10" />
  </>
);

export const PresetPreview: React.FC<PresetPreviewProps> = ({
  name,
  category,
  isSelected,
}) => {
  const seed = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }, [name]);

  const getColor = (offset: number, saturation = 90, lightness = 60) => {
    const hue = (seed + offset) % 360;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const getInitials = (text: string) => {
    const words = text.split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return text.slice(0, 2).toUpperCase();
  };

  /* ---------------- LETTERING ---------------- */
  const renderLettering = () => {
    const color1 = getColor(0);
    const color2 = getColor(120);
    const glitchOffsets = [-2, 0, 2];

    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950 relative overflow-hidden">
        <BackgroundMatrix />
        {name
          .slice(0, 8)
          .toUpperCase()
          .split("")
          .map((char, i) => (
            <span
              key={i}
              className="absolute font-black text-sm mix-blend-screen"
              style={{
                left: `${(i * 12) + 5}%`,
                transform: `rotate(${(i * 10 + seed % 15) % 360 - 15}deg) translateY(${
                  glitchOffsets[i % 3]
                }px)`,
                color: i % 2 === 0 ? color1 : color2,
                textShadow: `${glitchOffsets[i % 3]}px 0 ${color1}, ${
                  -glitchOffsets[i % 3]
                }px 0 ${color2}`,
              }}
            >
              {char}
            </span>
          ))}
      </div>
    );
  };

  /* ---------------- MONOGRAM ---------------- */
  const renderMonogram = () => {
    const initials = getInitials(name);
    const color1 = getColor(0);
    const color2 = getColor(180);

    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-950 relative overflow-hidden">
        <BackgroundMatrix />
        <span
          className="text-3xl font-extrabold absolute mix-blend-screen opacity-90"
          style={{
            color: color1,
            transform: "rotate(-10deg) skewX(-10deg) translate(-2px, -2px)",
          }}
        >
          {initials[0]}
        </span>
        <span
          className="text-3xl font-extrabold absolute mix-blend-screen opacity-90"
          style={{
            color: color2,
            transform: "rotate(12deg) skewX(8deg) translate(2px, 2px)",
          }}
        >
          {initials[1]}
        </span>
      </div>
    );
  };

  /* ---------------- VECTOR ---------------- */
  const renderVector = () => {
    const color1 = getColor(0, 80, 55);
    const color2 = getColor(150, 80, 55);
    const shapeType = seed % 4;

    return (
      <div className="w-full h-full bg-zinc-950 relative overflow-hidden">
        <BackgroundMatrix />
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 mix-blend-screen">
          {shapeType === 0 && (
            <>
              <polygon points="10,90 90,90 50,10" fill={color1} opacity="0.8" />
              <polygon points="20,70 80,70 50,20" fill={color2} opacity="0.8" />
            </>
          )}
          {shapeType === 1 && (
            <>
              <rect x="15" y="15" width="70" height="70" fill={color1} transform={`rotate(${seed % 45} 50 50)`} opacity="0.8" />
              <rect x="25" y="25" width="50" height="50" fill={color2} transform={`rotate(${-(seed % 30)} 50 50)`} opacity="0.8" />
            </>
          )}
          {shapeType === 2 && (
            <>
              <polygon points="50,0 100,50 50,100 0,50" fill={color1} opacity="0.8" />
              <polygon points="50,20 80,50 50,80 20,50" fill={color2} opacity="0.8" />
            </>
          )}
          {shapeType === 3 && (
            <>
              <circle cx="50" cy="50" r="35" fill={color1} opacity="0.8" />
              <polygon points="50,20 75,50 50,80 25,50" fill={color2} opacity="0.8" />
            </>
          )}
        </svg>
      </div>
    );
  };

  /* ---------------- MAIN ---------------- */
  const renderPreview = () => {
    switch (category) {
      case "lettering":
        return renderLettering();
      case "monogram":
        return renderMonogram();
      case "vector":
        return renderVector();
      default:
        return renderLettering();
    }
  };

  return (
    <div
      className={`w-full h-full overflow-hidden transition-all duration-300 relative ${ isSelected ? 'brightness-110' : 'opacity-70 group-hover:opacity-100' }`}
    >
      {/* Global SVG Noise Filter */}
      <svg className="pointer-events-none absolute inset-0 z-50 opacity-[0.15] mix-blend-overlay w-full h-full">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      
      {renderPreview()}
    </div>
  );
};
