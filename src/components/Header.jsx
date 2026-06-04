export default function Header() {
  return (
    <header className="relative py-20 px-6 text-center overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-wine-950/50 rounded-full blur-[120px]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      </div>

      {/* Logo da empresa */}
      <div className="flex gap-6 justify-center mb-8">
        <img
          src="/logo.png"
          alt="Tio do Crepe Creperia"
          className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 8px 32px rgba(124,27,56,0.3))' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Ornamento superior */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c4a45a" strokeWidth="1" opacity="0.7">
            <path d="M8 22h8M12 11v11M5 2h14l-2 9a5 5 0 0 1-10 0L5 2z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
        </div>

        {/* Título principal */}
        <h1 className="font-display text-white text-4xl md:text-6xl font-light leading-none mb-4">
          Carta de
          <br />
          <em className="text-wine-400 not-italic">Vinhos</em>
        </h1>

        {/* Linha ornamental inferior */}
        <div className="ornament-line mt-10 max-w-xs mx-auto">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="#c4a45a" opacity="0.6">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
          </svg>
        </div>
      </div>
    </header>
  )
}
