import { useState } from "react";
import { Mermaid } from "./Mermaid";
import { EditorWindow } from "./EditorWindow";

function App() {
  const [chartText, setChartText] = useState<string>(`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  `);

  return (
    <>
      <div className="flex justify-center h-screen w-screen">
        <div className="w-full m-3">
          <EditorWindow chartText={chartText} setChartText={setChartText} />
        </div>
        <div className="w-full m-3">
          <Mermaid chartText={chartText} />
        </div>
      </div>
    </>
  );
}

export default App;
