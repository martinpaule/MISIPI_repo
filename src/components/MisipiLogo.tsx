import { useState } from "react";
import { logoAnimation, textOutline, logoColors } from "@/config";

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
        transform: animated && isExpanded ? "translateX(-1em)" : "translateX(0)",
      }}
    >
      <div className="relative flex items-center" style={{ gap: "0" }}>
        {/* M with ARTINA sliding out */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span className="font-bold relative z-10" style={{ ...letterOutlineStyle, color: logoColors.m }}>
            M
          </span>
          {animated && (
            <div className="absolute left-full top-0 overflow-hidden">
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transitionDuration: `${logoAnimation.duration.letterSlide}ms`,
                  transitionDelay: isExpanded ? `${logoAnimation.delay.martina}ms` : "0ms",
                  textShadow: "var(--title-outline)",
                }}
              >
                ARTINA
              </span>
            </div>
          )}
        </div>

        {/* First I */}
        <span
          className={`${animated ? "transition-opacity ease-out" : ""} ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            color: logoColors.i,
            ...(animated && { transitionDuration: `${logoAnimation.duration.letterFade}ms` }),
          }}
        >
          I
        </span>

        {/* S with SOLÁROVÁ */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`font-bold relative z-10 ${animated ? "transition-all ease-out" : ""}`}
            style={{
              ...letterOutlineStyle,
              color: logoColors.s,
              ...(animated && isExpanded && {
                transform: `translateY(${logoAnimation.transform.sVertical}) translateX(${logoAnimation.transform.sHorizontal})`,
              }),
              ...(animated && { transitionDuration: `${logoAnimation.duration.letterMove}ms` }),
            }}
          >
            S
          </span>
          {animated && (
            <div
              className="absolute left-full top-0 overflow-hidden transition-all ease-out"
              style={{
                ...(isExpanded && {
                  transform: `translateY(${logoAnimation.transform.sVertical}) translateX(${logoAnimation.transform.sHorizontal})`,
                }),
                transitionDuration: `${logoAnimation.duration.letterMove}ms`,
              }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transitionDuration: `${logoAnimation.duration.letterSlide}ms`,
                  transitionDelay: isExpanded ? `${logoAnimation.delay.solarova}ms` : "0ms",
                  textShadow: "var(--title-outline)",
                }}
              >
                OLÁROVÁ
              </span>
            </div>
          )}
        </div>

        {/* Second I */}
        <span
          className={`${animated ? "transition-opacity ease-out" : ""} ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            color: logoColors.i,
            ...(animated && { transitionDuration: `${logoAnimation.duration.letterFade}ms` }),
          }}
        >
          I
        </span>

        {/* P with AULEOVÁ */}
        <div className="relative inline-flex items-center" style={{ gap: "0" }}>
          <span
            className={`font-bold relative z-10 ${animated ? "transition-all ease-out" : ""}`}
            style={{
              ...letterOutlineStyle,
              color: logoColors.p,
              ...(animated && isExpanded && {
                transform: `translateY(${logoAnimation.transform.pVertical}) translateX(${logoAnimation.transform.pHorizontal})`,
              }),
              ...(animated && { transitionDuration: `${logoAnimation.duration.letterMove}ms` }),
            }}
          >
            P
          </span>
          {animated && (
            <div
              className="absolute left-full top-0 overflow-hidden transition-all ease-out"
              style={{
                ...(isExpanded && {
                  transform: `translateY(${logoAnimation.transform.pVertical}) translateX(${logoAnimation.transform.pHorizontal})`,
                }),
                transitionDuration: `${logoAnimation.duration.letterMove}ms`,
              }}
            >
              <span
                className={`inline-block whitespace-nowrap transition-all ease-out text-foreground dark:text-white ${
                  isExpanded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
                style={{
                  transitionDuration: `${logoAnimation.duration.letterSlide}ms`,
                  transitionDelay: isExpanded ? `${logoAnimation.delay.pauleova}ms` : "0ms",
                  textShadow: "var(--title-outline)",
                }}
              >
                AULEOVÁ
              </span>
            </div>
          )}
        </div>

        {/* Third I */}
        <span
          className={`${animated ? "transition-opacity ease-out" : ""} ${animated && isExpanded ? "opacity-0" : "opacity-100"}`}
          style={{
            ...letterOutlineStyle,
            color: logoColors.i,
            ...(animated && { transitionDuration: `${logoAnimation.duration.letterFade}ms` }),
          }}
        >
          I
        </span>
      </div>
    </div>
  );
};

export default MisipiLogo;