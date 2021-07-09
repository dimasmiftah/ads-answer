function encryptSquareCode(text: string): string[] {
  const squareSize = findSquareSize(text);
  const squareOfText = createSquareOfText(squareSize, text);
  const ArrayOfRows = createArrayOfRows(squareSize, squareOfText);
  return ArrayOfRows.map((item) => item.join(''));
}

function findSquareSize(text: string): number[] {
  const row = Math.round(Math.sqrt(text.length));
  const col = Math.round(text.length / row);

  if (row * col >= text.length) return [row, col];
  return [row, col + 1];
}

let pointer = 0;
function createSquareOfText(size: number[], text: string): string[][] {
  const result: string[][] = Array(size[0])
    .fill(0)
    .map((x) => Array(size[1]).fill(0));
  const textArray = text.split('');
  for (let i = 0; i < size[0]; i++) {
    for (let j = 0; j < size[1]; j++) {
      result[i][j] = textArray[pointer];
      pointer++;
    }
  }
  return result;
}

function createArrayOfRows(size: number[], array: string[][]): string[][] {
  const result = Array(size[1])
    .fill(0)
    .map((x) => Array(size[0]).fill(0));
  for (let i = 0; i < size[1]; i++) {
    for (let j = 0; j < size[0]; j++) {
      result[i][j] = array[j][i];
    }
  }
  return result;
}

encryptSquareCode('akusayangsamakamuloh'); // [ 'ayam', 'kamu', 'unal', 'sgko', 'asah' ]
// encryptSquareCode('haveaniceday'); // [ 'hae', 'and', 'via', 'ecy' ]
// encryptSquareCode('feedthedog'); // [ 'fto', 'ehg', 'ee', 'dd' ]
// encryptSquareCode('chillout'); // [ 'clu', 'hlt', 'io' ]
