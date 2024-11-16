import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './components/pages/Aboutus.tsx'
import Index from './components/pages/Benefitstojoin.tsx'
import Locationpage from './components/pages/Location.tsx'
import Leaders from './components/pages/leaders.tsx'
import Driving from './components/pages/drivingresults.tsx'
import Footer from './components/pages/Footer.tsx'
import Header from './components/pages/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Header/>
    <About/>
    <Index />
    <Locationpage/>
    <Leaders/>
    <Driving/>
    <Footer/>
  </StrictMode>,
)
