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
      <div className="relative">
        <div className="flex items-center">
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
                style={{ transitionDelay: isHovered ? "500ms" : "0ms" }}
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

          {/* S with OLÁROVÁ - moves down and left on hover */}
          <div className="relative inline-flex items-center">
            <span
              className={`text-[#A8D8EA] font-bold relative z-10 transition-all duration-400 ease-out ${
                isHovered ? "translate-y-[1.2em] -translate-x-[1.6em]" : ""
              }`}
              style={letterOutlineStyle}
            >
              S
            </span>
            <div 
              className={`overflow-hidden inline-block transition-all duration-400 ease-out ${
                isHovered ? "translate-y-[1.2em] -translate-x-[1.6em]" : ""
              }`}
            >
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: isHovered ? "600ms" : "0ms" }}
              >
                OLÁROVÁ
              </span>
            </div>
          </div>

          {/* Second I */}
          <span
            className={`text-foreground transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>

          {/* P with AULEOVÁ - moves down 2 lines and left on hover */}
          <div className="relative inline-flex items-center">
            <span
              className={`text-[#E0BBE4] font-bold relative z-10 transition-all duration-400 ease-out ${
                isHovered ? "translate-y-[2.4em] -translate-x-[3.2em]" : ""
              }`}
              style={letterOutlineStyle}
            >
              P
            </span>
            <div 
              className={`overflow-hidden inline-block transition-all duration-400 ease-out ${
                isHovered ? "translate-y-[2.4em] -translate-x-[3.2em]" : ""
              }`}
            >
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: isHovered ? "600ms" : "0ms" }}
              >
                AULEOVÁ
              </span>
            </div>
          </div>

          {/* Third I */}
          <span
            className={`text-foreground transition-opacity duration-200 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            I
          </span>
        </div>
      </div>
    </div>
  );
};

export default MisipiLogo;
