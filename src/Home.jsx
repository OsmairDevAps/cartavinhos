import { Link } from "react-router-dom";

export default function Home() {
  const MenuIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 5c-1.5-1-3.5-1.5-6-1.5C4.3 3.5 3 4.8 3 6.5v11c0 1.7 1.3 3 3 3 2.5 0 4.5.5 6 1.5" />
      <path d="M12 5c1.5-1 3.5-1.5 6-1.5 1.7 0 3 1.3 3 3v11c0 1.7-1.3 3-3 3-2.5 0-4.5.5-6 1.5" />

      <line x1="12" y1="5" x2="12" y2="22" />

      <line x1="6" y1="9" x2="9" y2="9" />
      <line x1="6" y1="12" x2="9" y2="12" />

      <line x1="15" y1="9" x2="18" y2="9" />
      <line x1="15" y1="12" x2="18" y2="12" />
    </svg>
  )
  const WineGlassIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 11v11M5 2h14l-2 9a5 5 0 0 1-10 0L5 2z" />
    </svg>
  )

  return (
    <div className="flex flex-col justify-center gap-12 items-center h-screen">
      <img
        src="/logo.png"
        alt="Tio do Crepe"
        className="h-36 md:h-48 w-auto object-contain drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(124,27,56,0.3))' }}
      />
      <div className="flex justify-center w-full">
        <MenuIcon />&nbsp;<Link to='/cardapio' className=" text-red-400 hover:text-white">Cardápio</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <WineGlassIcon />&nbsp;<Link to='/cartavinhos' className=" text-red-400 hover:text-white">Carta de Vinhos</Link>
      </div>
    </div>
  )
}