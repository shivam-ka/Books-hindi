import React from 'react'
import './Navbar.css'
import { assests } from '../../assets/assests'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={'/'}>
                <div className="nav-title">
                    <img className='logo' src={assests.logo} alt="" />
                    <div>
                        <h1>बुक्स <span>हिंदी</span></h1>
                        <hr />
                        <p>हिंदी किताबों की दुकान</p>
                    </div>

                </div>
            </Link>


            <div className="nav-search">
                <img src={assests.search_logo} alt="" />
                <input type="text" placeholder='Search' />
            </div>

            <div className="nav-menu">
                <ul>
                    <li> <a href="#footer">About us</a> </li>
                    <li> <a href="#foodDisplay">Categories</a> </li>
                    <li> <a href="#footer">Contact us</a> </li>
                    <li>Track Order</li>
                    <hr />
                    <li>Account</li>
                </ul>
            </div>
            <div className="nav-cart">
                <img src={assests.cart_logo} alt="" />
            </div>
        </div>
    )
}

export default Navbar