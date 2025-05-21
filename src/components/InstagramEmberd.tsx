import { useEffect } from "react";

type InstagramReelEmbedProps = {
  url: string;
};

const InstagramReelEmbed: React.FC<InstagramReelEmbedProps> = ({ url }) => {
  useEffect(() => {
    if (!(window as any).instgrm) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else {
      (window as any).instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: 540,
        minWidth: 326,
        padding: 0,
        width: "99.375%",
      }}
    >
      <a
        href={url}
        style={{
          background: "#FFFFFF",
          lineHeight: 0,
          padding: "0 0",
          textAlign: "center",
          textDecoration: "none",
          width: "100%",
        }}
        target="_blank"
        rel="noreferrer"
      ></a>
    </blockquote>
  );
};

export default InstagramReelEmbed;
