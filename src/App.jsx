import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Studio from './pages/Studio'
import Services from './pages/Services'
import Journal from './pages/Journal'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="studio" element={<Studio />} />
          <Route path="services" element={<Services />} />
          <Route path="journal" element={<Journal />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
