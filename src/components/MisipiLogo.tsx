import { useState } from "react";
import { LOGO_ANIMATION } from "@/lib/constants";
import { textOutline } from "@/lib/styles";

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

  const letterOutlineStyle = textOutline(2);

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
                className={`inline-block whitespace-nowrap ease-out ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ 
                  transition: `all ${LOGO_ANIMATION.SLIDE_DURATION}ms ease-out`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.EXPAND_DELAY}ms` : "0ms" 
                }}
              >
                ARTINA
              </span>
            </div>
          )}
        </div>

        {/* First I */}
        <span
          className={`text-white ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            transition: animated ? `opacity ${LOGO_ANIMATION.FADE_DURATION}ms` : undefined,
          }}
        >
          I
        </span>

        {/* S with SOLÁROVÁ - moves down and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#A8D8EA] font-bold relative z-10 ${
              animated && isExpanded ? "translate-y-[1.2em] -translate-x-[1em]" : ""
            }`}
            style={{
              ...letterOutlineStyle,
              transition: animated ? `all ${LOGO_ANIMATION.EXPAND_DURATION}ms ease-out` : undefined,
            }}
          >
            S
          </span>
          {animated && (
            <div
              className={`absolute left-full top-0 overflow-hidden ${
                isExpanded ? "translate-y-[1.2em] -translate-x-[1em]" : ""
              }`}
              style={{ transition: `all ${LOGO_ANIMATION.EXPAND_DURATION}ms ease-out` }}
            >
              <span
                className={`inline-block whitespace-nowrap ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transition: `all ${LOGO_ANIMATION.SLIDE_DURATION}ms ease-out`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.SLIDE_DELAY}ms` : "0ms",
                }}
              >
                OLÁROVÁ
              </span>
            </div>
          )}
        </div>

        {/* Second I */}
        <span
          className={`text-white ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            transition: animated ? `opacity ${LOGO_ANIMATION.FADE_DURATION}ms` : undefined,
          }}
        >
          I
        </span>

        {/* P with AULEOVÁ - moves down 2 lines and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#E0BBE4] font-bold relative z-10 ${
              animated && isExpanded ? "translate-y-[2.4em] -translate-x-[2em]" : ""
            }`}
            style={{
              ...letterOutlineStyle,
              transition: animated ? `all ${LOGO_ANIMATION.EXPAND_DURATION}ms ease-out` : undefined,
            }}
          >
            P
          </span>
          {animated && (
            <div
              className={`absolute left-full top-0 overflow-hidden ${
                isExpanded ? "translate-y-[2.4em] -translate-x-[2em]" : ""
              }`}
              style={{ transition: `all ${LOGO_ANIMATION.EXPAND_DURATION}ms ease-out` }}
            >
              <span
                className={`inline-block whitespace-nowrap ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transition: `all ${LOGO_ANIMATION.SLIDE_DURATION}ms ease-out`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.SLIDE_DELAY}ms` : "0ms",
                }}
              >
                AULEOVÁ
              </span>
            </div>
          )}
        </div>

        {/* Third I */}
        <span
          className={`text-white ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            transition: animated ? `opacity ${LOGO_ANIMATION.FADE_DURATION}ms` : undefined,
          }}
        >
          I
        </span>
      </div>
    </div>
  );
};

export default MisipiLogo;
