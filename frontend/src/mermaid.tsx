import mermaid from "mermaid";
import { useState, useEffect } from "react";

const defaultChartText: string = 
`graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
`

let isFirstRendering = true;

export const Mermaid = () => {
  const [chartText, setMessage] = useState<string>(defaultChartText);

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }

  useEffect(() => {
    if (isFirstRendering) {
      isFirstRendering = false;
      return;
    }
    document.getElementById("mermaid-chart")?.removeAttribute("data-processed");
    mermaid.contentLoaded();
  }, [ chartText ]);
  
  return (
  <>
    <textarea name="chart"
     value={chartText}
     onChange={handleMessageChange} />
    <div id="mermaid-chart" className="mermaid">{chartText}</div>
  </>
  );
};
