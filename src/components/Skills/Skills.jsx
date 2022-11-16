import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    
    <section className="skills section" id="skills">
    {/* <h2 className="section__title">Skill</h2> */}
    <span className="section__subtitle">adjaojaofao</span>

    <div className="container skills__container">

                {/* First */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <i class="uil uil-java-script skill__icon"></i>
                    ABC</h3> <br /> <br />
                    
                    {/* <span className="skill__subtitle">Lorem ipsum dolor sit amet.</span> */}
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
                    <i class="uil uil-java-script skill__icon"></i>
                        DEF</h3>
                    {/* <span className="skill__subtitle">Lorem ipsum dolor sit amet.</span> */}
                </div>
                

            </div>

        </div>

        
    </section>
  )
}

export default Skills
