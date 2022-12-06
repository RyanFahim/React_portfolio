import React from 'react'

const Info = () => {
  return (
    <>
      <div className="about__info grid">
        <div className="about__box">
          <i class="bx bx-award about__icon"></i>
          <h3 className="about__title">Experience</h3>
          <span className="about__subtitile">2+ years Working</span>
        </div>

        <div className="about__box">
          <i class="bx bx-hard-hat about__icon" ></i>
          <h3 className="about__title">Worked</h3>
          <span className="about__subtitile">on 20+ projects & modules</span>
        </div>

        <div className="about__box">
          <i class="bx bx-support about__icon" ></i>
          <h3 className="about__title">Services</h3>
          <span className="about__subtitile">Online 24/7</span>
        </div>


      </div>

    </>
  )
}

export default Info
