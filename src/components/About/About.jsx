import React from 'react'
import './about.css'
import AboutImage from '../../assets/man.jpg'
import CV from '../../assets/Fahim-CV.pdf'
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About</h2>
        <span className="section__subtitle">Introduction</span>

        <div className="about__container container grid">
            <img src= {AboutImage} alt="" className="about__img" />

            <div className="about__data">
                <Info/>
                <p className="about__description">
                    Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Ipsam, aperiam!
                </p>

                <a download="" href= {CV} className="button button-flex">
                    Download CV <i class='bx bx-file'></i>
                </a>
            </div>

        </div>
    </section>
  )
}

export default About


