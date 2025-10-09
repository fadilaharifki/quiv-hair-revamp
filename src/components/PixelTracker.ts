"use client";

import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const PixelTracker = () => {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

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
