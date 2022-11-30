import { useState } from 'react'

import { Mermaid } from "./Mermaid"
import { Editor } from "./Editor"
import './App.css'

function App() {
  const [chartText, setChartText] = useState<string>(`graph TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[fa:fa-car Car]
  `);

  return (
    <div className="App">
      <Editor chartText={chartText} setChartText={setChartText} />
      <Mermaid chartText={chartText} />
    </div>
  )
}

export default App
