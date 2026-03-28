interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="cyber-screen flex flex-col items-center justify-center min-h-full p-6 gap-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-2 border-cyan-500/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border-2 border-magenta-500/10 animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="text-center max-w-sm z-10">
        <h1 className="cyber-title text-5xl font-bold mb-1 tracking-widest glitch-text" style={{animationDuration: '3s'}}>
          Soc Ops
        </h1>
        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 mb-6 shadow-lg shadow-cyan-500/50" />
        <p className="text-xl cyber-muted mb-10 uppercase tracking-[0.18em] font-bold" style={{textShadow: '0 0 10px rgba(0,255,255,0.3)'}}>
          ~ Social Bingo ~
        </p>
        
        <div className="cyber-panel rounded-lg p-8 mb-10 border-2 border-magenta-500/60 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-magenta-500/5 to-cyan-500/0 group-hover:via-magenta-500/10 transition-all duration-300" />
          <h2 className="font-bold text-[color:var(--color-neon-cyan)] mb-4 uppercase tracking-[0.12em] text-lg relative z-10">→ How to play ←</h2>
          <ul className="text-left cyber-muted text-sm space-y-3 relative z-10 font-semibold">
            <li className="flex items-center gap-3">
              <span className="text-[color:var(--color-neon-yellow)]">▪</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[color:var(--color-neon-magenta)]">▪</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[color:var(--color-neon-lime)]">▪</span>
              <span>Get 5 in a row to WIN!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="cyber-button w-full font-extrabold py-4 px-8 rounded-lg text-lg transition-all uppercase tracking-wider relative overflow-hidden group"
        >
          <span className="relative z-10">▶ START MISSION ◀</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
}
