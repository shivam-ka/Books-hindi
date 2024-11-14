import React, { useRef } from 'react'
import Slider from '../../components/Slider/Slider'
import BookDisplay from '../../components/BookDisplay/BookDisplay'
import Navbar from '../../components/Navbar/Navbar'
import { assests } from '../../assets/assests'
import './Home.css'

const Home = () => {

  setTimeout(() => {
    pop_up.style.display = "block"
  }, 5000);

  const closePopUp = () => {
    pop_up.style.display = "none"
  }
  

  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <BookDisplay />

      <div id='pop_up'  className="discount-popup">
        <img src={assests.discount_img} alt="" />
        <img onClick={()=> closePopUp()} className='close' src={assests.close_icon} alt="" />
      </div>

    </div>
  )
}

export default Home