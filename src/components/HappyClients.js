import React from 'react'
import Blog from './Blog';
import './StylingCSS/HappyClients.css';
const HappyClients = () => {
  return (
    <>
      <div className='container containerHappyClients'>
      <h1 className='head'>Happy Clients</h1>
        <div className='row'>
            <div className='col-md-2 p-3'>
                <img className='imgHappyClients' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV9L7AvRP4F8Gzzewp2YVujrlZNjSq91l8LJ_WXwVc&s' alt='b'/>
            </div>
            <div className='col-md-4 clientsCard mb-5 p-3'>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <h5>— Jeremy Winston, <span className='m-0'>CEO XYZ Inc.</span></h5>
            </div>
            <div className='col-md-2 p-3'>
                <img className='imgHappyClients' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNK68qtlu2K3AAnHqi5XA07hOAaekg3RXeYoMUEI&s' alt='b'/>
            </div>
            <div className='col-md-4 clientsCard mb-5 p-3'>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <h5>— Richard Atkinson, <span className='m-0'>CEO XYZ Inc.</span></h5>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'>
                <img className='imgHappyClients' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='b'/>
            </div>
            <div className='col-md-4 clientsCard p-3'>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <h5>— Jeremy Winston, <span className='m-0'>CEO XYZ Inc.</span></h5>
            </div>
            <div className='col-md-2'>
            <img className='imgHappyClients' src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='b'/>
            </div>
            <div className='col-md-4 clientsCard p-3'>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                <h5>— Richard Atkinson, <span className='m-0'>CEO XYZ Inc.</span></h5>
            </div>
        </div>
      </div>
      <Blog/>
    </>
  )
}

export default HappyClients
