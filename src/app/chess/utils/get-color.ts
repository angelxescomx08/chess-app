import type * as chess from 'chess';

export function getSquareColor(square: chess.Square): 'light' | 'dark' {
  const fileIndex = square.file.charCodeAt(0) - 'a'.charCodeAt(0);
  const rankIndex = square.rank - 1;
  return (fileIndex + rankIndex) % 2 === 0 ? 'light' : 'dark';
}