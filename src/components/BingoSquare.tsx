import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'cyber-square relative flex items-center justify-center p-2 text-center border-2 rounded transition-all duration-75 select-none min-h-[70px] text-xs leading-tight font-bold hover:scale-105 active:scale-95';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'cyber-square-winning'
      : 'cyber-square-marked'
    : '';

  const freeSpaceClasses = square.isFreeSpace ? 'font-extrabold text-sm text-[color:var(--color-neon-yellow)] shadow-lg shadow-yellow-500/40' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto text-[10px]">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="cyber-check absolute top-1 right-1 text-sm font-black">✓</span>
      )}
      {square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-lg">★</span>
      )}
    </button>
  );
}
