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
      className={`relative inline-block ${animated ? "cursor-pointer" : ""} ${className} font-cinzel font-bold transition-transform duration-500 ease-out`}
      onClick={handleToggle}
      style={{ 
        letterSpacing: "-0.02em",
        transform: animated && isExpanded ? "translateX(-3em)" : "translateX(0)"
      }}
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
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{ 
                  transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_SLIDE}ms`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.DELAY.MARTINA}ms` : "0ms",
                  textShadow: 'var(--title-outline)'
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
            ...(animated && { transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_FADE}ms` }),
          }}
        >
          I
        </span>

        {/* S with SOLÁROVÁ - moves down and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#A8D8EA] font-bold relative z-10 ${animated ? "transition-all ease-out" : ""}`}
            style={{
              ...letterOutlineStyle,
              ...(animated && isExpanded && {
                transform: `translateY(${LOGO_ANIMATION.TRANSFORM.S_VERTICAL}) translateX(${LOGO_ANIMATION.TRANSFORM.S_HORIZONTAL})`,
              }),
              ...(animated && { transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_MOVE}ms` }),
            }}
          >
            S
          </span>
          {animated && (
            <div
              className="absolute left-full top-0 overflow-hidden transition-all ease-out"
              style={{
                ...(isExpanded && {
                  transform: `translateY(${LOGO_ANIMATION.TRANSFORM.S_VERTICAL}) translateX(${LOGO_ANIMATION.TRANSFORM.S_HORIZONTAL})`,
                }),
                transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_MOVE}ms`,
              }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_SLIDE}ms`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.DELAY.SOLAROVA}ms` : "0ms",
                  textShadow: 'var(--title-outline)'
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
            ...(animated && { transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_FADE}ms` }),
          }}
        >
          I
        </span>

        {/* P with AULEOVÁ - moves down 2 lines and left on hover */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`text-[#E0BBE4] font-bold relative z-10 ${animated ? "transition-all ease-out" : ""}`}
            style={{
              ...letterOutlineStyle,
              ...(animated && isExpanded && {
                transform: `translateY(${LOGO_ANIMATION.TRANSFORM.P_VERTICAL}) translateX(${LOGO_ANIMATION.TRANSFORM.P_HORIZONTAL})`,
              }),
              ...(animated && { transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_MOVE}ms` }),
            }}
          >
            P
          </span>
          {animated && (
            <div
              className="absolute left-full top-0 overflow-hidden transition-all ease-out"
              style={{
                ...(isExpanded && {
                  transform: `translateY(${LOGO_ANIMATION.TRANSFORM.P_VERTICAL}) translateX(${LOGO_ANIMATION.TRANSFORM.P_HORIZONTAL})`,
                }),
                transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_MOVE}ms`,
              }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_SLIDE}ms`,
                  transitionDelay: isExpanded ? `${LOGO_ANIMATION.DELAY.PAULEOVA}ms` : "0ms",
                  textShadow: 'var(--title-outline)'
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
            ...(animated && { transitionDuration: `${LOGO_ANIMATION.DURATION.LETTER_FADE}ms` }),
          }}
        >
          I
        </span>
      </div>
    </div>
  );
};

export default MisipiLogo;
