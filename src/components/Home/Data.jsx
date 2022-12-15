import React from 'react'
// import './home.css'
import hello from "../../assets/message.svg"

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title"> Rakib Raihan Fahim</h1>

      <h3 className="home__subtitle">Software Developer</h3>
      <p className="home__description">I design beautiful things and I love doing it!
      
      <svg id="heart__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "var(--pastel-color)"}}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>      

      
      </p>
      
      <a href="#contact" className="button button--flex">
        Say Hello
       
        
      </a>
    </div>
  )
}

export default Data
