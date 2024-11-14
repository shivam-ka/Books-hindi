import React from 'react'
import './BookDisplay.css'
import BookItem from '../BookItem/BookItem'
import { bestSeller, newRelease } from '../../assets/assests'

const BookDisplay = () => {
    return (
        <div id='foodDisplay' className='bookdisplay'>

            <div className='bestSeller'>
                <div className="bestSeller-title">
                    <h2>Best Seller</h2>
                    <p>You Might Like this, Scroll For More...</p>
                </div>

                <div className='bestSeller-container'>
                    {bestSeller.map((item, index) => {
                        return <BookItem key={item.id} id={item.id} Discount_Price={item.Discount_Price} price={item.price} img={item.img} />
                    })}
                </div>

            </div>

            <div className='newRelease'>
                <div className="newRelease-title">
                    <h2>New Release</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='newRelease-container'>
                    {newRelease.map((item, index) => {
                        return <BookItem key={item.id} id={item.id} Discount_Price={item.Discount_Price} price={item.price} img={item.img} />
                    })}
                </div>

            </div>



        </div>
    )
}

export default BookDisplay