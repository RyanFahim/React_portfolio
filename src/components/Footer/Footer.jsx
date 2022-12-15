import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        
        <footer className="footer section">
        <div className="footer__container container">
            <h2 className="footer__title">Rakib Raihan Fahim</h2>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/RyanFahim" className="footer__social-icon" target="_blank">
                    <i class="uil uil-github-alt single-social-icon"></i>
                </a>

                <a href="https://www.facebook.com/RRFahim/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-facebook single-social-icon"></i>
                </a>


                <a href="https://www.linkedin.com/in/rrfahim/" className="footer__social-icon" target="_blank">
                    <i class="uil uil-linkedin-alt single-social-icon"></i>
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
