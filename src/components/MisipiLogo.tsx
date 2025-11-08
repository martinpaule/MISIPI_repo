import { useState } from "react";
import { ANIMATION } from "@/lib/constants";
import { TEXT_OUTLINES } from "@/lib/styles";

interface MisipiLogoProps {
  className?: string;
  onHoverChange?: (isHovered: boolean) => void;
  animated?: boolean;
  isExpanded?: boolean;
}

const MisipiLogo = ({
  className = "",
  onHoverChange,
  animated = true,
  isExpanded: externalIsExpanded,
}: MisipiLogoProps) => {
  const [internalIsExpanded, setInternalIsExpanded] = useState(false);
  const isExpanded = externalIsExpanded !== undefined ? externalIsExpanded : internalIsExpanded;

  const handleToggle = () => {
    if (!animated) return;
    const newState = !isExpanded;
    setInternalIsExpanded(newState);
    onHoverChange?.(newState);
  };

  // Use consistent text outline from shared styles
  const letterOutlineStyle = TEXT_OUTLINES.medium;

  return (
    <div
      className={`relative inline-block ${animated ? "cursor-pointer" : ""} ${className} font-cinzel font-bold`}
      onClick={handleToggle}
      style={{ letterSpacing: "-0.02em" }}
    >
      <div className="relative flex items-center" style={{ gap: "0" }}>
        {/* M with ARTINA sliding out */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span className="text-[#FFB5C5] font-bold relative z-10" style={letterOutlineStyle}>
            M
          </span>
          {animated && (
            <div className="absolute left-full top-0 overflow-hidden">
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ 
                  transitionDuration: `${ANIMATION.LOGO.LETTER_EXPAND_DURATION}ms`,
                  transitionDelay: isExpanded ? `${ANIMATION.LOGO.NAME_EXPAND_DELAY}ms` : "0ms"
                }}
              >
                ARTINA
              </span>
            </div>
          )}
        </div>

        {/* First I */}
        <span
          className={`text-white ${animated ? "transition-opacity ease-out" : ""} ${
            animated && isExpanded ? "opacity-0" : "opacity-100"
          }`}
          style={{ 
            ...letterOutlineStyle,
            ...(animated && { transitionDuration: `${ANIMATION.LOGO.TEXT_FADE_DURATION}ms` })
          }}
        >
          I
        </span>

        {/* S with OLÁROVÁ - moves down and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#A8D8EA] font-bold relative z-10 ${animated ? "transition-all ease-out" : ""} ${
              animated && isExpanded ? "translate-y-[1.2em] -translate-x-[1em]" : ""
            }`}
            style={{ 
              ...letterOutlineStyle,
              ...(animated && { transitionDuration: `${ANIMATION.LOGO.LETTER_MOVE_DURATION}ms` })
            }}
          >
            S
          </span>
          {animated && (
            <div
              className={`absolute left-full top-0 overflow-hidden transition-all ease-out ${
                isExpanded ? "translate-y-[1.2em] -translate-x-[1em]" : ""
              }`}
              style={{ transitionDuration: `${ANIMATION.LOGO.LETTER_MOVE_DURATION}ms` }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ 
                  transitionDuration: `${ANIMATION.LOGO.LETTER_EXPAND_DURATION}ms`,
                  transitionDelay: isExpanded ? `${ANIMATION.LOGO.SECOND_NAME_DELAY}ms` : "0ms"
                }}
              >
                OLÁROVÁ
              </span>
            </div>
          )}
        </div>

        {/* Second I */}
        <span
          className={`text-white ${animated ? "transition-opacity ease-out" : ""} ${
            animated && isExpanded ? "opacity-0" : "opacity-100"
          }`}
          style={{ 
            ...letterOutlineStyle,
            ...(animated && { transitionDuration: `${ANIMATION.LOGO.TEXT_FADE_DURATION}ms` })
          }}
        >
          I
        </span>

        {/* P with AULEOVÁ - moves down 2 lines and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#E0BBE4] font-bold relative z-10 ${animated ? "transition-all ease-out" : ""} ${
              animated && isExpanded ? "translate-y-[2.4em] -translate-x-[2em]" : ""
            }`}
            style={{ 
              ...letterOutlineStyle,
              ...(animated && { transitionDuration: `${ANIMATION.LOGO.LETTER_MOVE_DURATION}ms` })
            }}
          >
            P
          </span>
          {animated && (
            <div
              className={`absolute left-full top-0 overflow-hidden transition-all ease-out ${
                isExpanded ? "translate-y-[2.4em] -translate-x-[2em]" : ""
              }`}
              style={{ transitionDuration: `${ANIMATION.LOGO.LETTER_MOVE_DURATION}ms` }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ 
                  transitionDuration: `${ANIMATION.LOGO.LETTER_EXPAND_DURATION}ms`,
                  transitionDelay: isExpanded ? `${ANIMATION.LOGO.SECOND_NAME_DELAY}ms` : "0ms"
                }}
              >
                AULEOVÁ
              </span>
            </div>
          )}
        </div>

        {/* Third I */}
        <span
          className={`text-white ${animated ? "transition-opacity ease-out" : ""} ${
            animated && isExpanded ? "opacity-0" : "opacity-100"
          }`}
          style={{ 
            ...letterOutlineStyle,
            ...(animated && { transitionDuration: `${ANIMATION.LOGO.TEXT_FADE_DURATION}ms` })
          }}
        >
          I
        </span>
      </div>
    </div>
  );
};

export default MisipiLogo;
