interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="cyber-modal-overlay fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="cyber-modal rounded-xl p-8 max-w-sm w-full text-center animate-bounce" style={{animationDuration: '0.6s'}}>
        <div className="text-6xl mb-6 animate-pulse" style={{animationDuration: '0.8s'}}>
          ◆ 🎉 ◆
        </div>
        <h2 className="cyber-title text-4xl font-black mb-3 tracking-widest" style={{animation: 'glitch 2s ease-in-out infinite', textShadow: '0 0 30px rgba(255,0,255,0.8), 0 0 60px rgba(0,255,255,0.4)'}}>
          B I N G O !
        </h2>
        <div className="h-1 w-48 mx-auto bg-gradient-to-r from-cyan-500 via-magenta-500 to-yellow-500 mb-4 shadow-lg" />
        <p className="cyber-muted mb-8 text-lg font-bold tracking-wider uppercase">≫ You completed a line! ≪</p>
        
        <button
          onClick={onDismiss}
          className="cyber-button w-full font-extrabold py-4 px-6 rounded-lg transition-all uppercase tracking-wider text-lg relative overflow-hidden group"
        >
          <span className="relative z-10">▶ CONTINUE ◀</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </div>
  );
}
