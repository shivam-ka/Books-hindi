import React from 'react'
import './bookItem.css'

const BookItem = ({ id, price, Discount_Price, img }) => {
    return (
        <div className='bookitem'>
            <img src={img} alt="" />
            <div className='bookitem-detail'>
                <div className="price">
                    <div className="original-price"> ₹{price}</div>
                    <div className="dis-price">₹{Discount_Price}</div>
                </div>
                <button className='add-btn'>Buy Now</button>
            </div>

        </div>
    )
}

export default BookItem