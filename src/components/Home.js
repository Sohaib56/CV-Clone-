import React from 'react'
import About from './About';
import './StylingCSS/Home.css';
const Home = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='frontImg'>
        {/* <img src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_769729163_200013341653767170567_404088.jpg' alt='Home' /> */}
     <img src='https://t3.ftcdn.net/jpg/01/97/33/70/360_F_197337024_J09x5b8LEUbGR1m1XKORVq7MANXNfwvo.jpg'  alt='Home'/>
      </div>
      <div className='centretxt'>
        <p>I,m Sohaib Ali</p>
        <p> a MERN-Stack Developer</p>
      </div>    
    </div>
    <About/>
</>
  )
}

export default Home
