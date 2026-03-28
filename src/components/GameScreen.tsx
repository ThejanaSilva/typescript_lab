import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="cyber-screen flex flex-col min-h-full">
      <header className="cyber-header flex items-center justify-between p-4 gap-4">
        <button
          onClick={onReset}
          className="px-4 py-2 rounded border-2 border-[rgb(var(--neon-cyan-rgb)/0.6)] text-[color:var(--color-neon-cyan)] font-bold uppercase tracking-wider hover:bg-[rgb(var(--neon-cyan-rgb)/0.15)] active:bg-[rgb(var(--neon-cyan-rgb)/0.25)] transition-all shadow-lg shadow-cyan-500/30 text-sm"
        >
          ← BACK
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-bold cyber-title tracking-[0.15em] text-3xl" style={{textShadow: '0 0 20px rgba(0,255,255,0.6), 0 0 40px rgba(255,0,255,0.3)'}}>
            Soc Ops
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2" />
        </div>
        <div className="w-20" />
      </header>

      <p className="text-center cyber-muted text-xs py-2.5 px-4 font-semibold tracking-wider uppercase bg-[rgb(var(--neon-cyan-rgb)/0.08)] border-y border-[rgb(var(--neon-cyan-rgb)/0.2)]">
        ► Find your match ◄
      </p>

      {hasBingo && (
        <div className="cyber-status text-center py-3 font-extrabold text-sm tracking-widest animate-pulse" style={{animationDuration: '0.8s'}}>
          ◈ 🎉 B I N G O ! 🎉 ◈
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>

      <div className="pb-4 px-4 text-center text-xs cyber-muted font-mono tracking-tight opacity-70">
        [SYSTEM STATUS: OPERATIONAL]
      </div>
    </div>
  );
}
