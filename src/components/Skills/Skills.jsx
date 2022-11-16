import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    
    <section className="skills section" id="skills">
    <h2 className="section__title">Skill</h2>
    <span className="section__subtitle">SKills I aquire</span>

    <div className="container skills__container">

            {/* First */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-java-script skill__icon"></i>
                    JavaScript</h3> <br /> <br />
                    
                    
                </div>
                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

            </div>

            {/* Second */}

            <div className="skills__data">
                <div></div>

                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-react skill__icon"></i>
                        React JS</h3><br /> <br />
                    
                </div>
                

            </div>


            {/* Third */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-html5 skill__icon"></i>
                    HTML</h3> <br /> <br />
                    
                    
                </div>
                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

            </div>

            {/* Fourth*/}

            <div className="skills__data">
                <div></div>

                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-css3-simple skill__icon"></i>
                        CSS</h3> <br /><br />
                </div>
                

            </div>


            {/* Fifth */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    
                    <i class='bx bxl-bootstrap skill__icon'></i>
                    Bootstrap + React Bootstrap</h3> <br /> <br />
                    
                    
                </div>
                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

            </div>

            {/* Sixth */}

            <div className="skills__data">
                <div></div>

                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line"></span>
                </div>

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-github-alt skill__icon"></i>
                        Github</h3> <br /><br />
                </div>
                

            </div>

            {/* Seventh */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    
                    <i class='uil uil-brackets-curly skill__icon'></i>
                    Development</h3> 
                    
                    
                </div>
                <div>
                    <span className="skill__rounder"></span>
                    <span className="skill__line last__line"></span>
                </div>

            </div>

        </div>

        
    </section>
  )
}

export default Skills
