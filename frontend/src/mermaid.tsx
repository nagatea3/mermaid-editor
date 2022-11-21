import mermaid from "mermaid";
import { useState } from "react";

const chart_text: string = 
`graph TD
A[Christmas] -->|Get money| B(Go shopping)
B --> C{Let me think}
C -->|One| D[Laptop]
C -->|Two| E[iPhone]
C -->|Three| F[fa:fa-car Car]
`

export const Mermaid = () => {
  mermaid.contentLoaded();
  const [message, setMessage] = useState(chart_text);

  const handleMessageChange = ( event: React.ChangeEvent<HTMLTextAreaElement> ) => {
    setMessage(event.target.value);
    mermaid.init();
  }
  
  return <>
    <textarea name="chart"
     value={chart_text}
     onChange={handleMessageChange} />
    <div className="mermaid">{message}</div>
  </>;
};
