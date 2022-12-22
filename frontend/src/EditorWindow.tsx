import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";

type EditorPros = {
  chartText: string;
  setChartText: React.Dispatch<React.SetStateAction<string>>;
};

export const EditorWindow = ({ chartText, setChartText }: EditorPros) => {
  const handleTextChange = (
    value: string | undefined,
    ev: editor.IModelContentChangedEvent
  ) => {
    if (value !== undefined) {
      setChartText(value);
    }
  };

  return <Editor defaultValue={chartText} onChange={handleTextChange} />;
};
