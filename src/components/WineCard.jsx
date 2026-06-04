import { useState } from 'react'

const WineGlassIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 22h8M12 11v11M5 2h14l-2 9a5 5 0 0 1-10 0L5 2z" />
  </svg>
)

export default function WineCard({ wine, index }) {
  const [imgError, setImgError] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div
      className="wine-card relative rounded-2xl overflow-hidden border border-white/5 bg-dark-card group"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Glow de fundo no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-wine-900/0 to-wine-900/0 group-hover:from-wine-950/60 group-hover:to-transparent transition-all duration-500 pointer-events-none z-0" />

      {/* Imagem */}
      <div className="relative h-72 bg-gradient-to-b from-dark-700 to-dark-800 flex items-center justify-center overflow-hidden">
        {/* Fundo decorativo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-wine-800/40 blur-3xl" />
        </div>

        {wine.foto && !imgError ? (
          <>
            {!imgLoaded && (
              <div className="absolute inset-0 skeleton" />
            )}
            <img
              src={wine.foto}
              alt={wine.nome}
              className={`h-full w-full object-contain p-6 transition-all duration-700 group-hover:scale-105 relative z-10 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
            />
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 text-gold/30 relative z-10">
            <WineGlassIcon />
            <span className="text-xs font-body tracking-widest uppercase">sem imagem</span>
          </div>
        )}

        {/* Badge de preço flutuante */}
        <div className="absolute bottom-3 right-3 bg-dark-900/90 backdrop-blur-sm border border-gold-500/30 rounded-xl px-3 py-1.5 z-20">
          <span className="font-display text-gold-400 text-lg font-medium">
            {formatPrice(wine.valor_individual)}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 p-5">
        {/* Linha ornamental */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mb-4" />

        {/* Nome */}
        <h3 className="font-display text-white text-2xl font-light leading-tight mb-1 group-hover:text-gold-300 transition-colors duration-300">
          {wine.nome}
        </h3>

        {/* Subtítulo / Origem */}
        {wine.subtitulo && (
          <p className="font-body text-gold-500/70 text-xs tracking-[0.2em] uppercase mb-3">
            {wine.subtitulo}
          </p>
        )}

        {/* Descrição */}
        {wine.descricao && (
          <p className="font-body text-white/50 text-sm leading-relaxed line-clamp-3">
            {wine.descricao}
          </p>
        )}

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center">
          <div className="text-gold-500/40">
            <WineGlassIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
