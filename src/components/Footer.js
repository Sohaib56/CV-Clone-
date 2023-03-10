import React from 'react'
import './StylingCSS/Footer.css';

const Footer = () => {
  return (
    <div className='container-fluid mt-5 footer'>
    <div className='container text-left'>
      <div className='row footerRow' >
        <div className='col-lg-4 col1  pt-4 pd-4'>
            <h1 className='fs-4'>
            About Orbit.
            </h1>
            <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <h1 className='fs-4'>
            Connect
            </h1>
            <div>
            <i className="fa fa-facebook rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>
            <i className="fa-brands fa-instagram rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>
            <i className="fa-brands fa-twitter rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>
            <i className="fa-brands fa-linkedin-in rounded-circle p-2 m-2 icon" style={{border:"1px solid"}}></i>

            </div>
        </div>
        <div className='col-lg-2 col2  pt-4 pd-4'>
        <h1 className='fs-4'>
        Navagation
        </h1>
        {/* <ul className='text-center'> */}
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Node</p>
        {/* </ul> */}
        </div>
        <div className='col-lg-2 col3 pt-4 pd-4'>
        <h1 className='fs-4'>
        Services
        </h1>
    
            <p>Web Design</p>
            <p>eCoomerce</p>
            <p>Frontend</p>
            <p>Wordpress</p>
        
        </div>
        <div className='col-lg-3 col4 pt-4 pd-4'>
        <h1 className='fs-4'>
        contact
        </h1>
        
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
            <p>(+92)34567892123</p>
            <p>(+92)34567892123</p>
            <p>info@gmail.com</p>
        
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
