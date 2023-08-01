import React from 'react'
import './skills.css'
import { BiLogoNodejs } from 'react-icons/bi'
import { DiJavascript1, DiReact } from 'react-icons/di'
import { SiExpress, SiMongodb } from 'react-icons/si'


const Skills = () => {
  return (
    
    <section className="skills section" id="skills">
    <h2 className="section__title">Skill</h2>
    <span className="section__subtitle">SKills I aquire 
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" style={{height:"25px", aspectRation:"1/1" ,marginLeft:"10px"}} viewBox="0 0 24 24"><path fill="var(--pastel-color)" d="M21.41,8.65s0,0,0-.06A10,10,0,0,0,2.63,8.53a.85.85,0,0,0-.08.24A9.87,9.87,0,0,0,2,12,10,10,0,1,0,21.41,8.65ZM12,4a8,8,0,0,1,6.92,4h-1.2a3,3,0,0,0-4.62.22A3.17,3.17,0,0,0,12,8a3.17,3.17,0,0,0-1.1.22A3,3,0,0,0,6.28,8H5.08A8,8,0,0,1,12,4Zm4.5,6a1,1,0,1,1-1-1A1,1,0,0,1,16.5,10Zm-7,0a1,1,0,1,1-1-1A1,1,0,0,1,9.5,10ZM12,20a8,8,0,0,1-8-8,8.24,8.24,0,0,1,.26-2H5.5a3,3,0,0,0,6,.18,1,1,0,0,1,1,0,3,3,0,0,0,6-.18h1.24A8.24,8.24,0,0,1,20,12,8,8,0,0,1,12,20Zm2.36-5.77a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54Z"/></svg>
     </span>

    <div className="container skills__container">

            {/* First */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <DiJavascript1 size={30} />
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
                    {/* <i class="uil uil-react skill__icon"></i> */}
                    <BiLogoNodejs size={30}/>
                        Node.js </h3><br /> <br />
                    
                </div>
                

            </div>


            {/* Third */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <SiExpress size={30}/>
                    Express JS</h3> <br /> <br />
                    
                    
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
                    <DiReact size={30} />
                    React JS</h3> <br /><br />
                </div>
                

            </div>


            {/* Fifth */}
            <div className="skills__data">

                <div>
                    <h3 className="skill__title">
                    <SiMongodb size={30} />
                    MongoDB</h3> <br /> <br />
                    
                    
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
