import FloatingLines from '../ReactBits/FloatingLines'
import Footer from './components/Footer'
import Header from './components/Header'
import MainPage from './components/MainPage'

const HomeMain = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative', backgroundColor: '#000000' }}>

    <div className="absolute inset-0 z-0">
    <FloatingLines
        enabledWaves={["middle","top","bottom",]}
        lineCount={[3,5,4]}
        lineDistance={[5,7,3]}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={false}
        parallax={true}
    />
    </div>
    <div className="relative z-10">
      <Header />
      <MainPage />
      <Footer />
    </div>
    </div>
  )
}

export default HomeMain
