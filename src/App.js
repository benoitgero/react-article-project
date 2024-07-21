function distributeText(text) {
  const paragraphs = text.split('\n\n');
  const totalParagraphs = paragraphs.length;
  const columnsCount = 3;
  const paragraphsPerColumn = Math.ceil(totalParagraphs / columnsCount);

  const columns = [];
  for (let i = 0; i < columnsCount; i++) {
    const start = i * paragraphsPerColumn;
    const end = Math.min(start + paragraphsPerColumn, totalParagraphs);
    columns.push(paragraphs.slice(start, end));
  }

  return columns;
}