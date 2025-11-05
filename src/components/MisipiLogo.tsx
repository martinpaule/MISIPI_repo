import { useState } from "react";

interface MisipiLogoProps {
  className?: string;
}

const MisipiLogo = ({ className = "" }: MisipiLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-visible">
        {/* Line 1: MISIPI -> MARTINA */}
        <div className="relative flex items-center whitespace-nowrap">
          {/* M with ARTINA sliding out */}
          <div className="relative inline-flex items-center overflow-hidden">
            <span className="text-[#FFB5C5] font-bold relative z-10">M</span>
            <span
              className={`inline-block transition-all duration-500 ease-out ${
                isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
              style={{ marginLeft: isHovered ? "0" : "-100%" }}
            >
              ARTINA
            </span>
          </div>

          {/* First I */}
          <span
            className={`text-foreground transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>

          {/* S - will move down */}
          <span
            className={`text-[#A8D8EA] font-bold transition-all duration-500 ease-out ${
              isHovered ? "opacity-0 absolute" : "opacity-100 relative"
            }`}
          >
            S
          </span>

          {/* Second I */}
          <span
            className={`text-foreground transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>

          {/* P - will move down 2 lines */}
          <span
            className={`text-[#E0BBE4] font-bold transition-all duration-500 ease-out ${
              isHovered ? "opacity-0 absolute" : "opacity-100 relative"
            }`}
          >
            P
          </span>

          {/* Third I */}
          <span
            className={`text-foreground transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>
        </div>

        {/* Line 2: SOLÁROVÁ (appears below when hovered) */}
        <div
          className={`relative flex items-center whitespace-nowrap transition-all duration-500 ease-out ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 absolute"
          }`}
        >
          <div className="relative inline-flex items-center overflow-hidden">
            <span className="text-[#A8D8EA] font-bold relative z-10">S</span>
            <span
              className={`inline-block transition-all duration-500 ease-out delay-100 ${
                isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
              style={{ marginLeft: isHovered ? "0" : "-100%" }}
            >
              OLÁROVÁ
            </span>
          </div>
        </div>

        {/* Line 3: PAULEOVÁ (appears below when hovered) */}
        <div
          className={`relative flex items-center whitespace-nowrap transition-all duration-500 ease-out delay-75 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 absolute"
          }`}
        >
          <div className="relative inline-flex items-center overflow-hidden">
            <span className="text-[#E0BBE4] font-bold relative z-10">P</span>
            <span
              className={`inline-block transition-all duration-500 ease-out delay-150 ${
                isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
              style={{ marginLeft: isHovered ? "0" : "-100%" }}
            >
              AULEOVÁ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisipiLogo;
