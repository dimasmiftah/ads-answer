function decryptSquareCode(text: string[]): string {
  const squareSize = decryptSquareSize(text);
  const ArrayOfRows = decryptArrayOfRows(squareSize, text);
  return ArrayOfRows.map((item) => item.join('')).join('');
}

function decryptSquareSize(text: string[]): number[] {
  const row = text[0].length;
  const col = text.length;
  return [row, col];
}

function decryptArrayOfRows(size: number[], array: string[]): string[][] {
  const result = Array(size[0])
    .fill(0)
    .map((x) => Array(size[1]).fill(0));
  for (let i = 0; i < size[0]; i++) {
    for (let j = 0; j < size[1]; j++) {
      result[i][j] = array[j][i] || '';
    }
  }
  return result;
}

decryptSquareCode(['ayam', 'kamu', 'unal', 'sgko', 'asah']); // 'akusayangsamakamuloh'
// decryptSquareCode([ 'hae', 'and', 'via', 'ecy' ]); // 'haveaniceday'
// decryptSquareCode([ 'fto', 'ehg', 'ee', 'dd' ]); // 'feedthedog'
// decryptSquareCode([ 'clu', 'hlt', 'io' ]); // 'chillout'
