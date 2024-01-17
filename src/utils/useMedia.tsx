"use client";
import { useEffect, useState } from "react";

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 500);
    setIsDesktop(window.innerWidth >= 1440);
    setIsLaptop(window.innerWidth >= 1024 && window.innerWidth < 1440);
    setIsTablet(window.innerWidth > 500 && window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile, isDesktop, isTablet, isLaptop };
};
