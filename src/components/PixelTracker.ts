"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = "1849008955806836";

    if (!pixelId) {
      return;
    }

    ReactPixel.init(pixelId);
    ReactPixel.pageView();

    const handleRouteChange = () => {
      ReactPixel.pageView();
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return null;
};

export default PixelTracker;
