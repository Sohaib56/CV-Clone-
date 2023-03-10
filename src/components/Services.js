import React from 'react'
import Resume from './Resume';
//import { Link } from 'react-router-dom'
import './StylingCSS/Services.css';

const Services = () => {
    return (
        <>
        <div className='container mt-5'>
            <div className='sev'>
                <h1>Services</h1>
            </div>
            <div className='cards'>
                <div className='row'>
                    <div className='col column  colBorder'>
                        <h2>
                        <i class="fa-solid fa-desktop"></i>
                        </h2>
                        <h2>Development</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='col colBorder'>
                        <h2>
                        <i class="fa-solid fa-object-ungroup"></i>
                        </h2>
                        <h2>Development</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className='col colBorder'>
                        <h2><i class="fa-sharp fa-regular fa-dumpster-fire"></i></h2>
                        <h2>Development</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
   
     </div>
<Resume/>
</>
    )
}

export default Services
