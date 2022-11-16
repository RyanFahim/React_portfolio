import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        
        <footer className="footer section">
        <div className="footer__container container">
            <h2 className="footer__title">Ryan</h2>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skillss</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="" className="footer__social-icon" target="_blank">
                    <i class="uil uil-github-alt single-social-icon"></i>
                </a>

                <a href="" className="footer__social-icon" target="_blank">
                    <i class="uil uil-facebook single-social-icon"></i>
                </a>


                <a href="" className="footer__social-icon" target="_blank">
                    <i class="uil uil-facebook-messenger-alt single-social-icon"></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Fahim. All right reserved
            </span>
        </div>
    </footer>
        
    )
}

export default Footer
