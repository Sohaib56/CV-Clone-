
import './StylingCSS/Contact.css';
import React from 'react'

const Contact = () => {
  return (
    <>
      <h1 className='contactHeading mb-5'>Contact Me</h1>
      <div className='container'>
      <div className='row'>
        <div className='col-md-8 contactColumn1'>
        <form>
  <div className="row">
    <div className="col formcolums">
      <input type="text" className="form-control firstname" placeholder="First name"/>
    </div>
    <div className="col formcolums">
      <input type="text" className="form-control  lastname" placeholder="Last name"/>
    </div>
  </div>
</form>
<form className='email'>
<input type="text" className="form-control" placeholder="Email"/> 
</form>
<form >
<textarea className='message' type="text" placeholder="Message" cols='97' rows='10'></textarea>
</form>
<button className='contactbtn mb-5' type="button">Send Message</button>
        </div>
        <div className='col-md-4 contactColumn2'>
            <h3 className='head' >Contact Info</h3>
            <p>
            <i class="icon fa-solid fa-location-dot"></i>
            43 Raymouth Rd. Baltemoer, London 3910
            </p>
            <p>
            <i class="icon fa-regular fa-phone"></i>
            (+92)3456789032
            </p>
            <p>
            <i class="icon fa-regular fa-phone"></i>
            (+92)3234431289
            </p>
            <p>
            <i class="icon fa-solid fa-message"></i>
            info@gmail.com
            </p>
            <p>
            <i class=" icon fa-regular fa-globe"></i>
            https://preview.colorlib.com/
            </p>

        </div>
      </div>

      </div>
    </>
  )
}

export default Contact
 