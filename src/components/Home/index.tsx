import FloatingLines from '../LoginSignup/FloatingLines'
import Footer from './components/Footer'
import Header from './components/Header'
import MainPage from './components/MainPage'

const HomeMain = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#00000000' }}>

    <div className="absolute inset-0">
    <FloatingLines
        enabledWaves={["top","middle","bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
    />
    </div>
    <Header />
    <MainPage />
    <Footer />
    </div>
  )
}

export default HomeMain