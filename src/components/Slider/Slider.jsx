import React, { useEffect, useState } from 'react'
import './Slider.css'
import { assests } from '../../assets/assests'

const Slider = () => {
    const [count, setCount] = useState(0)
    const image = [
        assests.slider_img_5,
        assests.slider_img_2,
        assests.slider_img_3,
        assests.slider_img_1,
        assests.slider_img_4,
    ]

    const rightSlider = () => {
        if (count => 0) {
            setCount(count + 1)
        }
        if (count === 4) {
            setCount(0)
        }

    }

    const leftSlider = () => {
        if (count => 1) {
            setCount(count - 1)
        }
        if (count === 0) {
            setCount(4)
        }

    }

  

    useEffect(() => {
       
        const interval = setInterval(() => {
          if (count < 4) {
            setCount((prevCount) => prevCount + 1);
          } 
          if(count===4){
            setCount(0)
          }

        }, 5000); 
    
        return () => clearInterval(interval);
      }, [count]);

    return (
        <div className='slider'>
            <img className='slide' src={image[count]} alt="" />
            <div onClick={() => leftSlider()} className='left-arrow'> <img src={assests.left_arrow} alt="" /></div>
            <div onClick={() => rightSlider()} className='right-arrow'> <img src={assests.right_arrow} alt="" /></div>

            <div className='dot-container'>
                {
                    image.map((item, index) => {
                        return <div onClick={() => setCount(index)} className={`dot  ${index == count ? 'active' : ""}`} key={index}> </div>
                    })
                }
            </div>
        </div>
    )
}

export default Slider