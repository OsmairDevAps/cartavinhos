import { Link } from "react-router-dom"
import logotipo from "../assets/logotipo.png"
import { FiArrowLeft } from 'react-icons/fi'

export default function HeaderMenu() {
  return (
    <header className="relative py-20 px-0 text-center overflow-hidden">
      <div className="fixed top-0 w-full">
        <div className="flex flex-row h-20 gap-4 justify-center items-center bg-black text-white">
          <img src={logotipo} className="w-20 h-20" alt="Tio do Crepe" />
        </div>

        <div className="flex flex-row bg-blue-600 py-2">
          {/* <Link to='/' className="w-10 pl-2"><FiArrowLeft size={24} /></Link> */}
          <h1 className="flex-1 font-normal text-2xl text-white">MENU</h1>
        </div>
      </div>
    </header>
  )
}
