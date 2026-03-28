import type { BingoSquareData, GameMode } from '../types';

interface BingoSquareProps {
  mode: GameMode;
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ mode, square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'cyber-square relative flex items-center justify-center p-2 text-center border-2 rounded transition-all duration-75 select-none min-h-[70px] text-xs leading-tight font-bold hover:scale-105 active:scale-95';

  const modeClasses =
    mode === 'bingo'
      ? 'after:absolute after:inset-x-1 after:bottom-1 after:h-[2px] after:bg-cyan-400/55'
      : 'after:absolute after:inset-x-1 after:bottom-1 after:h-[2px] after:bg-fuchsia-400/60';

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
      className={`${baseClasses} ${modeClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto text-[10px]">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className={`absolute top-1 right-1 text-sm font-black ${mode === 'bingo' ? 'cyber-check' : 'text-fuchsia-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.9)]'}`}>
          {mode === 'bingo' ? '✓' : '◎'}
        </span>
      )}
      {square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-lg">★</span>
      )}
      {!square.isFreeSpace && (
        <span
          className={`absolute top-1 left-1 rounded px-1 py-0.5 text-[8px] font-extrabold tracking-wider ${
            mode === 'bingo'
              ? 'bg-cyan-400/20 text-cyan-200 border border-cyan-300/50'
              : 'bg-fuchsia-400/20 text-fuchsia-200 border border-fuchsia-300/50'
          }`}
        >
          {mode === 'bingo' ? 'B' : 'H'}
        </span>
      )}
    </button>
  );
}
