import './home.css';
import React from 'react'

import About from './components/Title';
import Working from './components/Working'

const Home = () => {
  return (
    <div className='Home'>
        
        <About/>
        <Working/>
      
    </div>
  )
}

export default Home
