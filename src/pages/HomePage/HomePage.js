import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header/Header'

const HomePage = () => {
  return (
    <>
    <div className='homepage'>
      <Navbar/>
      <Header/>
    </div>
    </>
  )
}

export default HomePage