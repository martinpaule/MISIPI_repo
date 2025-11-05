import { useState } from "react";

interface MisipiLogoProps {
  className?: string;
}

const MisipiLogo = ({ className = "" }: MisipiLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Letter style with outline
  const letterOutlineStyle = {
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-start">
        {/* Line 1: MISIPI -> MARTINA */}
        <div className="relative flex items-center">
          {/* M with ARTINA sliding out */}
          <div className="relative inline-flex items-center">
            <span className="text-[#FFB5C5] font-bold relative z-10" style={letterOutlineStyle}>
              M
            </span>
            <div className="relative overflow-hidden inline-block">
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: isHovered ? "400ms" : "0ms" }}
              >
                ARTINA
              </span>
            </div>
          </div>

          {/* First I */}
          <span
            className={`text-foreground transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>

          {/* S - will move down */}
          <span
            className={`text-[#A8D8EA] font-bold absolute transition-all duration-400 ease-out ${
              isHovered ? "translate-y-[1.2em] opacity-100" : "translate-y-0 opacity-100"
            }`}
            style={{ ...letterOutlineStyle, left: "calc(1em + 0.6em)" }}
          >
            S
          </span>

          {/* Second I */}
          <span
            className={`text-foreground transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>

          {/* P - will move down 2 lines */}
          <span
            className={`text-[#E0BBE4] font-bold absolute transition-all duration-400 ease-out ${
              isHovered ? "translate-y-[2.4em] opacity-100" : "translate-y-0 opacity-100"
            }`}
            style={{ ...letterOutlineStyle, left: "calc(1em + 0.6em + 1em + 0.6em)" }}
          >
            P
          </span>

          {/* Third I */}
          <span
            className={`text-foreground transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>
        </div>

        {/* Line 2: SOLÁROVÁ (appears when S moves down) */}
        <div
          className={`relative flex items-center mt-[0.2em] transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: isHovered ? "300ms" : "0ms" }}
        >
          <div className="relative inline-flex items-center">
            <span className="text-[#A8D8EA] font-bold relative z-10 invisible" style={letterOutlineStyle}>
              S
            </span>
            <div className="absolute left-0 top-0 overflow-hidden inline-block">
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: isHovered ? "500ms" : "0ms" }}
              >
                OLÁROVÁ
              </span>
            </div>
          </div>
        </div>

        {/* Line 3: PAULEOVÁ (appears when P moves down) */}
        <div
          className={`relative flex items-center mt-[0.2em] transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: isHovered ? "300ms" : "0ms" }}
        >
          <div className="relative inline-flex items-center">
            <span className="text-[#E0BBE4] font-bold relative z-10 invisible" style={letterOutlineStyle}>
              P
            </span>
            <div className="absolute left-0 top-0 overflow-hidden inline-block">
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: isHovered ? "500ms" : "0ms" }}
              >
                AULEOVÁ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisipiLogo;
