import React from 'react'
import './about.css'
import AboutImage from '../../assets/man.jpg'
import CV from '../../assets/Fahim-CV.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About</h2>
            <span className="section__subtitle">

                Hi, I am Raihan Fahim, nice to meet you <i class='bx bxs-hand'></i>

            </span>

            <div className="about__container container grid">
                <img src={AboutImage} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        I am a Computer Science and Engineering student, graduated in 2021 and for past years I am working on web development.
                    </p>

                    <a download="" href={CV} className="button button-flex">
                        Download CV <i class='bx bx-file'></i>
                    </a>
                </div>

            </div>
        </section>
    )
}

export default About


