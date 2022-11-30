import mermaid from "mermaid";
import { useEffect } from "react";

let isFirstRendering = true;

type MermaidProps = {
  chartText: string,
}

export const Mermaid = ({chartText}: MermaidProps) => {
  useEffect(() => {
    if (isFirstRendering) {
      isFirstRendering = false;
      return;
    }
    document.getElementById("mermaid-chart")?.removeAttribute("data-processed");
    mermaid.contentLoaded();
  }, [ chartText ]);
  
  return (
    <div id="mermaid-chart" className="mermaid">{chartText}</div>
  );
};
