import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Resume from './components/Resume'
import All from './components/All'
import HappyClients from './components/HappyClients'
import Mockup from './components/Mockup'
import Packaging from './components/Packaging'
import Photography from './components/Photography'
import Typography from './components/Typography'
const App = () => {
  return (
    <>
    {/* <h1>hrllo</h1> */}
    <Router>

    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home />}/>
    {/* <Home/> */}
    <Route exact path="/About" element={<About />}/>

    <Route exact path="/Portfolio" element={<Portfolio />}>
    {/* <Route exact path="/Portfoli/All" element={<All />}/>
    <Route exact path="/Portfolio/Packaging" element={<Packaging />}/>
    <Route exact path="/Portfolio/Mockup" element={<Mockup />}/>
    <Route exact path="/Portfolio/Packaging" element={<Packaging />}/>
    <Route exact path="/Portfolio/Photography" element={<Photography />}/> */}
    </Route> 


    <Route exact path="/Services" element={<Services />}/>
    

    <Route exact path="/Resume" element={<Resume />}/>

   
    <Route exact path='/HappyClients' element={<HappyClients/>} />


    <Route exact path="/Blog" element={<Blog />}/>


    <Route exact path="/Contact" element={<Contact />}/>

    
    </Routes>

     <All/>
     <Mockup/>
     <Packaging/>
     <Photography/>
     <Typography/>    
    <Footer/>
   </Router>
    </>
  )
}

export default App

