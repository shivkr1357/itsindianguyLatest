"use client";
import { useEffect } from "react";

interface AdUnitProps {
  adSlot: string;
  adFormat?: "auto" | "fluid" | "rectangle";
  fullWidthResponsive?: boolean;
  className?: string;
}

const AdUnit = ({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}: AdUnitProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7213785205715000"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdUnit;

