import { Link } from "react-router-dom";

export default function Home() {
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
      <div className="flex justify-center w-full text-red-400 hover:text-white">
        <WineGlassIcon />&nbsp;
        <Link to='/cartavinhos'>Carta de Vinhos</Link>
      </div>
    </div>
  )
}