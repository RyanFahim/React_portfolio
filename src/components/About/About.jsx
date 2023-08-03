import React from 'react'
import './about.css'
import AboutImage from '../../assets/man1.jpg'
import CV from '../../assets/Fahim-CV.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About</h2>
            <span className="section__subtitle">

                Hi, I am <span style={{ color: "var(--pastel-color)" }}> Rakib Raihan Fahim</span> , nice to meet you

                <svg id="hand__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                    <path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z" fill="var(--pastel-color)"></path></svg>
            </span>

            <div className="about__container container grid">
                <img src={AboutImage} alt="" className="about__img" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        With over two years of professional experience, I have honed my skills in diverse domains, mastering the art of JavaScript, Node.js, React JS, and Express.js. <br />
                        Passionate about the boundless possibilities of  <span style={{ fontWeight: "bolder" }}>Web Development</span>, I am driven by an unwavering determination to conquer challenges. Eager to create innovative solutions and inspire through my code.
                        In the ever-evolving world of technology, I thrive on turning innovative ideas into reality.
                        I try to code ensuring that it is not just functional, but also maintainable and easy to understand. <br /> <br />
                        <span style={{ fontStyle: "italic" }}>❝ Nothing is unsolvable. Unsolvable only means you haven’t found a way to solve it yet ❞</span>

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


