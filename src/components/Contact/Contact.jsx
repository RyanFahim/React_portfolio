import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">ABC</h2>
            <span className="section__subtitle">adaddwd</span>

            <div className="container contact__container">
                <div className="contact__content">
                    <div className="content__title">Let's talk</div>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i class="uil uil-envelope-edit contact__card-icon"></i>
                            <div className="contact__card-title">Email</div>
                            <div className="contact__card-data">rfahim098@gmail.com</div>
                        </div>

                        <div className="contact__card">
                            <i class="uil uil-facebook-messenger-alt contact__card-icon"></i>
                            <div className="contact__card-title">Messenger</div>
                            <div className="contact__card-data">rfahim098@gmail.com</div>
                        </div>

                        <div className="contact__card">
                            <i class="uil uil-whatsapp contact__card-icon"></i>
                            <div className="contact__card-title">What's App</div>
                            <div className="contact__card-data">rfahim098@gmail.com</div>
                        </div>

                    </div>
                </div>


                <div className="contact__content">
                    <form 
                    action="https://formspree.io/f/maykvpvr" 
                    method="POST" 
                    className="contact__form"
                    autoComplete="off"
                    >

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="contact__form-input"
                                placeholder="Enter your name" 
                                required/>

                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="contact__form-input"
                                placeholder="Enter your mail" 
                                required
                                />

                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                className="contact__form-input"
                                placeholder="Enter your project"
                                cols="30"
                                rows="10"
                                required
                                 ></textarea>

                        </div>
                        <button type="Submit" className="button button--flex">
                            Send message
                        </button>
                    </form>
                </div>
            </div>


        </section>
    )
}

export default Contact
