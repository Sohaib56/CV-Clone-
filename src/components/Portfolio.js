import React from 'react'
import { Link } from 'react-router-dom'
import Services from './Services';
import './StylingCSS/Portfolio.css';
const Portfolio = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  mt-5">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/All">All</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Packaging">Packaging</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mockup">Mockup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Typography">Typography</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Photography">Photography</Link>
            </li>
          </ul>    
      </div>
      </div>
    </nav> 
    {/* <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#portfolio/All">All</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Packaging</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Mockup</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Typography</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#Photography">Photography</a>
  </li>
  
</ul>


     {/* All Section */}

   

    {/* Photography 
    <div className='container portfolio' id='Photography'>
    <div className='row'>
    <div className='col-md-4'>
    <img className='row2img' src='https://www.techrepublic.com/wp-content/uploads/2022/07/top-ide-software-770x433.jpeg' alt='a'/>
    </div>
    <div className='col-md-4'>
    <img className='row2img' src='https://s3.us.cloud-object-storage.appdomain.cloud/res-files/384-plse.jpg' alt='a'/>
    </div>
    </div>
    </div> */}
    <Services/>
    </>
  )
}

export default Portfolio
