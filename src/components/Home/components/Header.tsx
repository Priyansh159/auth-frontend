import { useNavigate } from 'react-router-dom'
import spaceship from "../../../../public/images/logos/logoShip.png"

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='w-full fixed z-20'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8'>
        <div className='flex items-center gap-3 rounded-xl bg-black/20 px-3 backdrop-blur-xl'>
          <img className='h-12 w-12' src={spaceship} alt="Spaceship logo" />
          <p className='hidden text-sm font-semibold tracking-wider text-white/80 sm:block'>STARDOCK EXCHANGE</p>
        </div>

        <nav className='hidden w-full max-w-3xl items-center justify-between rounded-xl border border-white/20 bg-black/20 px-6 py-3 backdrop-blur-xl md:flex'>
          <a href="#home" className='text-base text-white/90 transition hover:text-white'>Home</a>
          <a href="#features" className='text-base text-white/90 transition hover:text-white'>Features</a>
          <a href="#about" className='text-base text-white/90 transition hover:text-white'>About Us</a>
          <a href="#contact" className='text-base text-white/90 transition hover:text-white'>Contact Us</a>
        </nav>

        <button
            type="button"
            onClick={() => navigate('/auth')}
            className="inline-flex items-center cursor-pointer text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 box-border border border-transparent focus-visible:ring-4 focus-visible:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
          >
            Login
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
