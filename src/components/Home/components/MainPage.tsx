import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  return (
    <main id="home" className='mx-auto w-full max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pt-20'>
      <section className='max-w-3xl rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md md:p-10'>
        <p className='mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-300'>Fictional Marketplace</p>
        <h1 className='text-4xl font-extrabold leading-tight text-white md:text-5xl'>
          Buy and Sell Rare Ships on
          <span className='text-blue-400'> StarDock Exchange</span>
        </h1>
        <p className='mt-4 max-w-2xl text-white/80'>
          Discover cargo freighters, tactical fighters, and deep-space explorers listed by verified traders across the Orion sector.
          Compare specs, negotiate offers, and secure deals with escrow-protected transactions.
        </p>
        <div className='mt-8 flex flex-wrap gap-4'>
          <button
            type='button'
            onClick={() => navigate('/auth')}
            className='rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700'
          >
            List Your Ship
          </button>
          <a
            href='#features'
            className='rounded-lg border border-white/30 bg-black/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10'
          >
            Browse Fleet Market
          </a>
        </div>
      </section>

      <section id='features' className='mt-12 grid gap-4 md:grid-cols-3'>
        <article className='rounded-xl border border-white/15 bg-black/25 p-6 backdrop-blur-sm'>
          <h3 className='text-xl font-semibold text-white'>Verified Ship Listings</h3>
          <p className='mt-2 text-white/75'>Every listing includes flight history, maintenance logs, and authenticity checks.</p>
        </article>
        <article className='rounded-xl border border-white/15 bg-black/25 p-6 backdrop-blur-sm'>
          <h3 className='text-xl font-semibold text-white'>Escrow and Safe Transfer</h3>
          <p className='mt-2 text-white/75'>Funds are held in secured escrow until both buyer and seller approve handoff.</p>
        </article>
        <article className='rounded-xl border border-white/15 bg-black/25 p-6 backdrop-blur-sm'>
          <h3 className='text-xl font-semibold text-white'>Live Price Intelligence</h3>
          <p className='mt-2 text-white/75'>Track market trends for engines, hull classes, and rare add-ons in real time.</p>
        </article>
      </section>

      <section id='about' className='mt-12 rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md md:p-8'>
        <h2 className='text-2xl font-bold text-white'>About StarDock Exchange</h2>
        <p className='mt-3 text-white/75'>
          StarDock Exchange is a fictional interstellar marketplace built for pilots, collectors, and fleet operators to trade spacecraft with confidence.
          Our mission is to make ship commerce transparent and trustworthy through verified listings, escrow-first payments, and seller reputation scoring.
        </p>
        <p className='mt-3 text-white/75'>
          From first-time buyers looking for light shuttlecraft to enterprise fleets sourcing long-range carriers, we provide tools to compare value,
          inspect records, and close deals faster.
        </p>
      </section>

      <section id='contact' className='mt-10 rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md md:p-8'>
        <h2 className='text-2xl font-bold text-white'>Contact Us</h2>
        <p className='mt-2 text-white/75'>
          Need help with a listing, dispute resolution, or enterprise fleet onboarding? Our marketplace ops team is available across all galactic time zones.
        </p>
        <div className='mt-5 grid gap-3 text-white/80 md:grid-cols-2'>
          <div className='rounded-lg border border-white/15 bg-black/25 p-4'>
            <p className='text-sm uppercase tracking-wider text-blue-300'>General Support</p>
            <p className='mt-1'>support@stardockexchange.space</p>
          </div>
          <div className='rounded-lg border border-white/15 bg-black/25 p-4'>
            <p className='text-sm uppercase tracking-wider text-blue-300'>Partnerships</p>
            <p className='mt-1'>partners@stardockexchange.space</p>
          </div>
          <div className='rounded-lg border border-white/15 bg-black/25 p-4'>
            <p className='text-sm uppercase tracking-wider text-blue-300'>Dockside Office</p>
            <p className='mt-1'>Orbital Ring 7, Port Vega Prime</p>
          </div>
          <div className='rounded-lg border border-white/15 bg-black/25 p-4'>
            <p className='text-sm uppercase tracking-wider text-blue-300'>Response Time</p>
            <p className='mt-1'>Typically within 2-4 standard hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage
