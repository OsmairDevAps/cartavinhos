import { useState, useEffect, useMemo } from 'react'
import { supabase } from './supabaseClient'
import HeaderMenu from './components/HeaderMenu'
import WineCard from './components/WineCard'
import LoadingSkeletonMenu from './components/LoadingSkeletonMenu'

export default function Cardapio() {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [taxaRolha, setTaxaRolha] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true)

        const { data, error } = await supabase
          .from('cardapios')
          .select('*')
          .neq('categoria', 'VINHOS')
          .eq('ativo', true)
          .order('ordem', { ascending: true })

        if (error) throw error

        setMenu(data)

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  const groupedMenu = menu.reduce((acc, m) => {
    const categoria = m.categoria || ''

    if (!acc[categoria]) {
      acc[categoria] = []
    }

    acc[categoria].push(m)

    return acc
  }, {})

  return (
    <div className="min-h-screen relative z-10 bg-gray-100">
      <HeaderMenu />

      {/* Conteúdo principal */}
      <main className="mx-4 px-6 pb-6">
        {loading && <LoadingSkeletonMenu />}

        {error && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border border-wine-700/40 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ac1f41" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p className="font-display text-wine-400 text-xl">Não foi possível carregar o Cardápio</p>
              <p className="font-body text-white/30 text-sm max-w-xs">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && menu.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="font-display text-white/40 text-2xl">Nenhum item encontrado</p>
            </div>
          </div>
        )}

        {!loading && !error && menu.length > 0 && (
          <div className="space-y-8">
            {Object.entries(groupedMenu).map(([subcategoria, menuList]) => (
              <div className=" gap-6">

                <ul key={subcategoria} className='w-full'>
                  <h2 className="text-2xl text-black font-bold mb-4">
                    {subcategoria}
                  </h2>
                  {menuList.map((item, index) => (
                    <li key={item.id} className="flex flex-row border-l-2 border-red-500 pl-2 my-4 pb-2">
                      <div className="flex flex-col flex-1">
                        <h3 className="text-gray-800 text-lg font-semibold">{item.nome}</h3>
                        {item.subtitulo && <p className="text-gray-800 text-sm italic">{item.subtitulo}</p>}
                        {item.descricao && <p className="text-sm text-gray-600">{item.descricao}</p>}
                      </div>
                      {item.categoria === 'CREPES' ?
                        <div className="flex flex-row gap-4 md:gap-8 lg:gap-16 items-center">
                          <div className="flex flex-col items-center text-blue-800">
                            <span className="font-medium">Só o crepe</span>
                            <span className="font-medium">R$ {item.valor_individual}</span>
                          </div>
                          <div className="flex flex-col items-center text-red-800">
                            <span className="font-medium">No Combo</span>
                            <span className="font-medium">R$ {item.valor_combo}</span>
                          </div>
                        </div>
                        :
                        <div className="flex flex-row gap-4 md:gap-8 lg:gap-16 items-center">
                          <div className="flex flex-col items-center text-blue-800">
                            <span className="text-right font-medium">R$ {item.valor_individual}</span>
                          </div>
                        </div>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </main >

      {/* Footer */}
      < footer className="border-t border-white/5 py-10 text-center" >
        <div className="ornament-line-red max-w-xs mx-auto mb-6">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="#fa1111" opacity="0.4">
            <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
          </svg>
        </div>

        <p className="font-body text-gray-700 text-xs tracking-[0.3em] uppercase">
          Preços sujeitos a alteração
        </p>
      </footer >
    </div >
  )
}
