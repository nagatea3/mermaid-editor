import { useState } from 'react'

import { Mermaid } from "./Mermaid"
import { EditorWindow } from "./EditorWindow"

function App() {
  const [chartText, setChartText] = useState<string>(`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  `);

  return (
    <div className="flex items-center justify-center">
      <EditorWindow chartText={chartText} setChartText={setChartText} />
      <Mermaid chartText={chartText} />
    </div>
  )
}

export default App
