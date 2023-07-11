import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Features from './pages/Features/Features'
import Prices from './pages/Prices/Prices'
import Details from './pages/Details/Details'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Prices />
      <Details />
      <Footer />
    </>
  )
}

export default App
