import React from 'react'
import './StylingCSS/All.css';
const All = () => {
  return (
    <>
       <div className='container portfolio'>
    <div className='row'>
      <div className='col-md-4'>
        <img className='img-first pb-3' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_cloud_computing.jpg' alt='a'/>
        <img className='img-first pt-3' src='https://news.mit.edu/sites/default/files/images/202206/MIT_3Q-Computing-Power-01.jpg' alt=''/>
      </div>
      <div className='col-md-4'>
      <img src='https://nzarchitects.com.pk/wp-content/uploads/2021/08/corner-house-design-d-12-islamabad-1-kanal-modern-residential-architecture-front-view.jpg' alt='a'/>
      </div>
      <div className='col-md-4'>
      <img src='https://cdn.mos.cms.futurecdn.net/g84icgJSVZXbib7BxPpMJB.jpg' alt='a'/>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-4 imgSecond pt-4'>
        <img className='row2img' src='https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg' alt='a'/>
      </div>
      <div className='col-md-4 imgSecond pt-4'>
      <img className='row2img' src='https://s3.us.cloud-object-storage.appdomain.cloud/res-files/384-plse.jpg' alt='a'/>
      </div>
      <div className='col-md-4 imgSecond pt-4'>
      <img className='row2img' src='https://www.techrepublic.com/wp-content/uploads/2022/07/top-ide-software-770x433.jpeg' alt='a'/>
      </div>
    </div>
    </div>
    </>
  )
}

export default All
