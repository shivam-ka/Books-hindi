import React from 'react'
import './Footer.css'
import { assests } from '../../assets/assests'

const Footer = () => {
    return (
        <div className='footer' id='footer'>

            <div className="footer-content">

                <div className="footer-content-left">
                    <div>
                        <img src={assests.logo} alt="" />
                        <h2>बुक्स <span>हिंदी</span> </h2>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, doloribus? Aut corporis nihil iusto asperiores amet, quasi beatae rerum, maiores culpa minima nulla unde totam facilis consectetur tempore earum natus magnam necessitatibus harum distinctio excepturi.</p>
                </div>

                <div className="footer-content-center">

                    <h2>QUICK LINKS</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>24, Ansari Road, Daryaganj,
                        New Delhi-110002</li>
                        <li>91 7827720848
                        011-41584421</li>
                        <li>Bookshindi@gamil.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='footer-content-copyright'>
                Copyright © 2024 Bookshindi.com All Right Reserved.
            </p>
        </div>
    )
}

export default Footer