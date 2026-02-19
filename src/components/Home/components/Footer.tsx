const Footer = () => {
  return (
    <footer className='mx-auto mt-8 w-full max-w-7xl px-4 pb-8 md:px-8'>
      <div className='rounded-xl border border-white/15 bg-black/30 px-5 py-4 text-sm text-white/75 backdrop-blur-md md:flex md:items-center md:justify-between'>
        <p>© 2026 StarDock Exchange. All rights reserved.</p>
        <div className='mt-3 flex gap-5 md:mt-0'>
          <a href="#home" className='transition hover:text-white'>Home</a>
          <a href="#features" className='transition hover:text-white'>Features</a>
          <a href="#contact" className='transition hover:text-white'>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
