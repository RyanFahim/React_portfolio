import React from 'react'
import './services.css'

const Services = () => {
    return (
        <section className="services section" id="services">

            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Services offered</span>
            <div className="container grid-container-services">

                <div className="service-card">

                    <i class="uil uil-arrow"></i>
                    <div className="services__title">
                        Software Development
                    </div>
                    <p className="service_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure!
                    </p>
                </div>

                <div className="service-card">

                    <i class="uil uil-arrow"></i>
                    <div className="services__title">
                        Web Development
                    </div>
                    <p className="service_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure!
                    </p>
                </div>


                <div className="service-card">

                    <i class="uil uil-arrow"></i>
                    <div className="services__title">
                        CSS
                    </div>
                    <p className="service_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure!
                    </p>
                </div>



            </div>



        </section>
    )
}

export default Services
