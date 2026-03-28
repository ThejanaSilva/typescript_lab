import type { BingoSquareData, GameMode } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  mode: GameMode;
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  isComplete: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  mode,
  board,
  winningSquareIds,
  isComplete,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const scavengerTarget = board.filter((square) => !square.isFreeSpace).length;
  const scavengerMarked = board.filter((square) => !square.isFreeSpace && square.isMarked).length;

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
        {mode === 'bingo' ? '► Find your match ◄' : '► Track every square ◄'}
      </p>

      <div className="py-2 px-4 flex justify-center">
        <span
          className={`rounded-full border px-3 py-1 text-[10px] font-extrabold tracking-[0.18em] uppercase ${
            mode === 'bingo'
              ? 'border-cyan-300/70 text-cyan-200 bg-cyan-500/10 shadow-[0_0_12px_rgba(0,255,255,0.25)]'
              : 'border-fuchsia-300/70 text-fuchsia-200 bg-fuchsia-500/10 shadow-[0_0_12px_rgba(255,0,255,0.25)]'
          }`}
        >
          Mode: {mode === 'bingo' ? 'Bingo' : 'Scavenger'}
        </span>
      </div>

      {mode === 'scavenger' && (
        <p className="text-center text-xs py-2 px-4 font-semibold tracking-wider uppercase text-[color:var(--color-neon-yellow)] bg-[rgb(var(--neon-yellow-rgb)/0.08)] border-b border-[rgb(var(--neon-yellow-rgb)/0.25)]">
          Progress: {scavengerMarked}/{scavengerTarget}
        </p>
      )}

      {isComplete && (
        <div className="cyber-status text-center py-3 font-extrabold text-sm tracking-widest animate-pulse" style={{animationDuration: '0.8s'}}>
          {mode === 'bingo' ? '◈ 🎉 B I N G O ! 🎉 ◈' : '◈ 🕶️ H U N T   C O M P L E T E ! ◈'}
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-6">
        <BingoBoard
          mode={mode}
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
