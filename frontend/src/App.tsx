import { useState } from "react";
import { Mermaid } from "./Mermaid";
import { EditorWindow } from "./EditorWindow";
import { Navbar } from "./Navbar";

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
      <div className="flex flex-col ">
        <Navbar />
        <div className="flex h-screen w-screen justify-center">
          <div className="m-3 w-full">
            <EditorWindow chartText={chartText} setChartText={setChartText} />
          </div>
          <div className="m-3 w-full">
            <Mermaid chartText={chartText} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
