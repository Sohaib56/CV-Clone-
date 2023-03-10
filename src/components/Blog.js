import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact';
import './StylingCSS/Blog.css';

const Blog = () => {
  return (
    <>
        <h1 className='heading'>Read On Medium</h1>
      <div className='container blogcontainer'>
        <p className='ptag'> Jun 28, 2020</p>
        <h2>Front-end Developer demand Today <span className='a'>2 Mins Read</span></h2>
        
      </div>
      <div className='container blogcontainer'>
        <p className='ptag'> Jun 28, 2020</p>
        <h2>I Used React-JS <span className='b'>2 Mins Read</span></h2>
      </div>
      <div className='container blogcontainer'>
        <p className='ptag'> Jun 28, 2020</p>
        <h2>Why Front-end eveloper So Important <span className='c'>2 Mins Read</span></h2>
      </div>
      <Contact/>
    </>
  )
}

export default Blog
