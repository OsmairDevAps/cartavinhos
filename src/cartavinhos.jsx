import { useState, useEffect, useMemo } from 'react'
import { supabase } from './supabaseClient'
import Header from './components/Header'
import WineCard from './components/WineCard'
import LoadingSkeleton from './components/LoadingSkeleton'

export default function CartaVinhos() {
  const [wines, setWines] = useState([])
  const [loading, setLoading] = useState(true)
  const [taxaRolha, setTaxaRolha] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWines() {
      try {
        setLoading(true)

        const { data, error } = await supabase
          .from('cardapios')
          .select('*')
          .eq('categoria', 'VINHOS')
          .eq('ativo', true)
          .order('ordem', { ascending: true })

        if (error) throw error

        const rolha = data.find(
          item => item.subcategoria === 'Taxa de Rolha'
        )

        const winesOnly = data.filter(
          item => item.subcategoria !== 'Taxa de Rolha'
        )

        setTaxaRolha(rolha.valor_individual)
        setWines(winesOnly)

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWines()
  }, [])

  const groupedWines = wines.reduce((acc, wine) => {
    const subcategoria = wine.subcategoria || 'Outros'

    if (!acc[subcategoria]) {
      acc[subcategoria] = []
    }

    acc[subcategoria].push(wine)

    return acc
  }, {})

  return (
    <div className="min-h-screen relative z-10">
      <Header />

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        {loading && <LoadingSkeleton />}

        {error && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-wine-700/40 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ac1f41" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p className="font-display text-wine-400 text-xl">Não foi possível carregar a carta</p>
              <p className="font-body text-white/30 text-sm max-w-xs">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && wines.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c4a45a" strokeWidth="0.8" opacity="0.3">
                <path d="M8 22h8M12 11v11M5 2h14l-2 9a5 5 0 0 1-10 0L5 2z" />
              </svg>
              <p className="font-display text-white/40 text-2xl">Nenhum vinho encontrado</p>
              <p className="font-body text-white/20 text-sm">Tente outros termos na busca</p>
            </div>
          </div>
        )}

        {!loading && !error && wines.length > 0 && (
          <div className="space-y-8">
            {Object.entries(groupedWines).map(([subcategoria, winesList]) => (
              <div key={subcategoria}>
                <h2 className="text-2xl font-bold mb-4">
                  {subcategoria}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {winesList.map((wine, index) => (
                    <WineCard
                      key={wine.id}
                      wine={wine}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center">
        <div className="ornament-line max-w-xs mx-auto mb-6">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="#c4a45a" opacity="0.4">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
          </svg>
        </div>

        <p className="font-body text-white/15 text-lg tracking-[0.3em] uppercase my-4">
          Taxa de rolha R${taxaRolha}
        </p>

        <div className="ornament-line max-w-xs mx-auto mb-6">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="#c4a45a" opacity="0.4">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
          </svg>
        </div>

        <p className="font-body text-white/15 text-xs tracking-[0.3em] uppercase">
          Carta de Vinhos · Preços sujeitos a alteração
        </p>

      </footer>
    </div>
  )
}
