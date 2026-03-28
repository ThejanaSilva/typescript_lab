import type { BingoSquareData, GameMode } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  mode: GameMode;
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ mode, board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <>
      <div className="absolute -inset-12 opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-500 animate-pulse" style={{animationDuration: '2s'}} />
        <div className="absolute inset-2 rounded-xl border border-magenta-500/50" style={{animationDuration: '3s'}} />
      </div>
      <div className="cyber-board grid grid-cols-5 gap-2 w-full max-w-md mx-auto aspect-square relative z-10">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            mode={mode}
            square={square}
            isWinning={winningSquareIds.has(square.id)}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </>
  );
}
