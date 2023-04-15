import React from "react";

function Footer() {
  return (
    <div className="p-2 text-center text-xs text-base-content/50">
      <p>
        Copyright © {new Date().getFullYear()} -{" "}
        <a
          className="font-bold"
          href="https://github.com/upscayl/upscayl"
          target="_blank"
        >
          Upscayl
        </a>{" "}
        (v<span className="font-bold">{navigator?.userAgent?.match(/Upscayl\/([\d\.]+\d+)/)[1]}</span>)
      </p>
      <p>
        By{" "}
        <a
          href="https://github.com/TGS963"
          className="font-bold"
          target="_blank"
        >
          TGS963
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/NayamAmarshe"
          className="font-bold"
          target="_blank"
        >
          Nayam Amarshe
        </a>
      </p>
    </div>
  );
}

export default Footer;
