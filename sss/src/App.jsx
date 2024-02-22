import React from 'react'
import Home from "./pages/Home"
import Services from "./pages/Services"
// import Apply from './pages/Apply'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes, Route} from "react-router-dom"
import GetStarted from './SERVICES/components/GetStarted'
import Footer from './HOMEPAGE/components/Footer'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/apply" element={<Apply/>}/> */}
      <Route path="/services" element={<Services/>}/>
      <Route path="/services#get-started" element={<GetStarted/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App