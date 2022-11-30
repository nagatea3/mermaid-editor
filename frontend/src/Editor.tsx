type EditorPros = {
  chartText: string,
  setChartText: React.Dispatch<React.SetStateAction<string>>,
}

export const Editor = ( {chartText, setChartText}: EditorPros ) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChartText(event.target.value);
  }

  return (
    <div>
      <textarea name="chart"
        value={chartText}
        onChange={handleTextChange} />
    </div>
  );
};
