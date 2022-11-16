import React from 'react'
import './services.css'

const Services = () => {
    return (
        <section className="services section" id="services">

            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Services offered</span>
            <div className="container grid-container-services">

                <div className="service-card">

                    <i class="uil uil-code-branch"></i>
                    <div className="services__title">
                        Software Development
                    </div>
                    <p className="service_description">
                        
                        Research, ideation, design and then develop a software according to business type for the highest profit
                    </p>
                </div>

                <div className="service-card">

                    <i class="uil uil-arrow"></i>
                    <div className="services__title">
                        Web Development
                    </div>
                    <p className="service_description">
                        Create and develop websites. Simply make your business online and get more clients/customers
                    </p>
                </div>


                <div className="service-card">

                    <i class="uil uil-crop-alt"></i>
                    <div className="services__title">
                        Software Design
                    </div>
                    <p className="service_description">
                    Designing software to make it more appealing and make the software user-friendly.
                    </p>
                </div>



            </div>



        </section>
    )
}

export default Services
