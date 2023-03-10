import React from 'react'
import { Link } from 'react-router-dom'
import HappyClients from './HappyClients';
import './StylingCSS/Resume.css';
const Resume = () => {
  return (
    <>
      <h1 className='resumeheading'>Resume</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-md-5'>
            <img className='resumeImg' src='https://img.freepik.com/premium-vector/work-home-freelancer-man-working-computer-remotely-internet-career-home-office-concept_110633-1124.jpg' alt='a' />
        </div>
        <div className='col-md-7'>
            <h2 className='resumeheading'>Experience</h2>
            <div className='experience'>
            <h4>Senior Front End Developer
            <span className='sub'>FULLTIME</span>
            </h4>
            <p>
            <i className="fa-solid fa-building mx-2"></i>
            Facebook, Inc.
            <i className="fa-regular fa-location-dot mx-2"></i>
            San Francisco
            <span className='lasticon'>
            <i className="fa-light fa-calendar-days "></i>
            November 2019 - Present
            </span>

            </p>
            </div>
            <div className='experience'>
            <h4>Front-end Engineer
            <span className='sub1'>PARTTIME</span>
            </h4>
            <p>
            <i className="fa-solid fa-building mx-2"></i>
            Facebook, Inc.
            <i className="fa-regular fa-location-dot mx-2"></i>
            San Francisco
            <span className='lasticon'>
            <i className="fa-light fa-calendar-days "></i>
            November 2019 - Present
            </span>

            </p>
            </div>
            <div className='experience'>
            <h4>Web Designer
            <span className='sub2'>FULLTIME</span>
            </h4>
            <p>
            <i className="fa-solid fa-building mx-2"></i>
            Facebook, Inc.
            <i className="fa-regular fa-location-dot mx-2"></i>
            San Francisco
            <span className='lasticon'>
            <i className="fa-light fa-calendar-days "></i>
            November 2019 - Present
            </span>

            </p>
            </div>
            <div className='experience'>
            <h4>Lead Front-end Engineer
            <span className='sub3'>FULLTIME</span>
            </h4>
            <p>
            <i className="fa-solid fa-building mx-2"></i>
            Facebook, Inc.
            <i className="fa-regular fa-location-dot mx-2"></i>
            San Francisco
            <span className='lasticon'>
            <i className="fa-light fa-calendar-days "></i>
            November 2019 - Present
            </span>

            </p>
            </div>
        </div>
      </div>

      </div>
      <HappyClients/>
    </>
  )
}

export default Resume
