import React from "react";
import ReactStringReplace from "react-string-replace";

export function parseBoldText(text: string | undefined) {
  if (!text) return null;

  return ReactStringReplace(text, /\*\*(.+?)\*\*/g, (match, i) => (
    <span className="font-medium" key={i}>
      {match}
    </span>
  ));
}
