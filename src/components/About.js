import React from 'react'
import Portfolio from './Portfolio';
import './StylingCSS/About.css';
const About = () => {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6 about-col'>
                        <img className='aboutimg' src='https://www.shutterstock.com/image-photo/man-working-on-laptop-home-260nw-503228728.jpg' alt='My Bio' />
                    </div>
                    <div className='col-md-6 about-col'>
                        <div>
                            <h1>My Bio</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                        <div>
                            <h2 className='fs-5 '>Design</h2>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                            </div>
                            <h2 className='fs-5'>HTML5</h2>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">98%</div>
                            </div>
                            <h2 className='fs-5'>CSS3</h2>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "97%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">97%</div>
                            </div>
                            <h2 className='fs-5'>WordPress</h2>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "88%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">88%</div>
                            </div>
                            <h2 className='fs-5'>Bootstrap</h2>
                            <div className="progress mb-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "92%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">92%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Portfolio/>
        </>
    )
}

export default About
