import mermaid from "mermaid";
import { useEffect, useRef } from "react";

let isFirstRendering = true;

type MermaidProps = {
  chartText: string;
};

export const Mermaid = ({ chartText }: MermaidProps) => {
  const refMermaid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirstRendering) {
      isFirstRendering = false;
      return;
    }
    refMermaid.current?.removeAttribute("data-processed");
    mermaid.contentLoaded();
  }, [chartText]);

  return (
    <div className="mermaid" ref={refMermaid}>
      {chartText}
    </div>
  );
};
