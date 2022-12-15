import React from 'react'
import './contact.css'
import handshake from "../../assets/handshake.svg"

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Let's get to know each other 
            {/* <img src= {handshake} alt="shake hand" className="contact__handshake"/> */}

           

<svg version="1.1" id="contact__handshake"  xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 207.586 207.586" style={{fill:"var(--pastel-color)"}} >
<g>
	<g>
		<path d="M204.539,80.265l-63.92-63.92c-4.051-4.055-10.654-4.048-14.716,0.014l-9.838,9.837c-1.973,1.975-3.061,4.591-3.061,7.37
			c-0.002,2.772,1.081,5.381,3.047,7.346l2.879,2.879c-3.473,1.371-8.345,3.524-13.851,6.588
			c-5.695-4.339-10.328-7.778-13.208-9.893c3.663-4.075,3.565-10.361-0.363-14.289l-9.838-9.84
			c-4.066-4.055-10.667-4.059-14.715-0.011l-63.92,63.92C-1.018,84.317-1.011,90.92,3.05,94.982l9.838,9.84
			c2.034,2.029,4.703,3.047,7.372,3.047c2.479,0,4.938-0.916,6.901-2.676c2.288,3.148,6.044,8.257,10.514,14.138l-10.052,10.05
			c-0.651,0.651-1.018,1.534-1.018,2.457c0,0.923,0.367,1.805,1.018,2.457l12.286,12.286l-0.001,0.001l4.913,4.913l0.001-0.001
			l7.371,7.371l4.913,4.913l9.829,9.829l-0.001,0.001l4.915,4.913l14.74,14.74c0.679,0.679,1.568,1.018,2.457,1.018
			s1.778-0.339,2.457-1.018l10.742-10.74c6.532,4.877,11.295,8.287,11.809,8.653c0.607,0.434,1.315,0.648,2.017,0.648
			c0.896,0,1.787-0.346,2.458-1.018l46.676-46.676c0.001-0.001,0.003-0.002,0.005-0.003c0.002-0.002,0.002-0.003,0.003-0.005
			l12.282-12.282c1.201-1.201,1.357-3.094,0.371-4.476c-0.391-0.548-4.228-5.904-9.618-13.095l7.033-14.126l4.69,4.69
			c2.024,2.026,4.684,3.037,7.346,3.037c2.667,0,5.337-1.018,7.37-3.05l9.838-9.837c1.973-1.975,3.061-4.591,3.061-7.37
			C207.588,84.839,206.506,82.23,204.539,80.265z M22.687,99.919c-1.36,1.37-3.51,1.36-4.887-0.014l-9.837-9.837
			c-1.352-1.354-1.359-3.546-0.015-4.889l63.92-63.92c0,0,0,0,0.002,0c0.679-0.682,1.554-1.021,2.429-1.021
			c0.882,0,1.768,0.346,2.458,1.035l9.837,9.837c1.352,1.354,1.359,3.546,0.015,4.889L22.687,99.919z M34.993,131.838l6.949-6.947
			c2.807,3.619,5.755,7.337,8.709,10.946l-5.829,5.83L34.993,131.838z M57.105,153.951l-7.371-7.372l5.381-5.382
			c2.408,2.827,4.747,5.459,6.949,7.795L57.105,153.951z M71.847,168.691l-9.827-9.827l4.959-4.959
			c3.055,2.881,6.64,6.006,10.461,9.191L71.847,168.691z M89.045,185.89l-12.284-12.284l6.08-6.083
			c4.671,3.762,9.426,7.45,13.799,10.773L89.045,185.89z M170.489,129.015l-7.738,7.737l-31.938-31.941
			c-1.357-1.357-3.556-1.357-4.913,0s-1.357,3.556,0,4.913l31.938,31.941l-9.827,9.827l-31.939-31.939
			c-1.357-1.357-3.556-1.357-4.913,0c-1.357,1.357-1.357,3.556,0,4.913l31.939,31.939l-9.827,9.827l-31.94-31.94
			c-1.357-1.357-3.556-1.357-4.913,0s-1.357,3.556,0,4.913l31.94,31.94l-12.65,12.65c-8.02-5.823-34.171-25.072-46.316-37.216
			c-6.94-6.942-16.197-18.454-23.949-28.547c-0.164-0.332-0.345-0.659-0.621-0.935c-0.057-0.057-0.132-0.075-0.191-0.127
			c-5.454-7.127-10.081-13.434-12.458-16.706l54.772-54.775c2.413,1.767,6.537,4.815,11.714,8.738
			c-5.524,3.558-11.313,7.95-16.7,13.338c-8.317,8.313-13.805,14.394-16.779,18.584c-1.462,2.06-4.885,6.885-1.615,10.149
			c0.763,0.763,2.185,2.185,15.744,3.461c0.108,0.01,0.217,0.014,0.326,0.014c0.509,0,1.015-0.112,1.478-0.329
			c7.227-3.393,20.605-8.537,25.625-7.984c7.971,0.895,19.772-5.713,26.161-9.317c0.125,0.187,0.206,0.394,0.371,0.559
			C145.411,94.843,164.665,120.997,170.489,129.015z M163.566,108.084c-8.019-10.483-17.874-22.787-25.383-30.296
			c-0.434-0.434-0.964-0.678-1.515-0.835c-0.068-0.239-0.093-0.485-0.216-0.713c-0.909-1.69-3.017-2.324-4.706-1.415
			c-0.572,0.309-1.308,0.723-2.173,1.211c-4.864,2.752-16.255,9.165-22.043,8.52c-7.928-0.913-24.186,6.219-28.497,8.191
			c-3.252-0.333-6.847-0.818-9.099-1.262c1.464-2.368,5.561-7.631,16.939-19.008c14.104-14.104,31.676-21.212,37.457-23.289
			l45.771,45.771L163.566,108.084z M199.611,90.068l-9.837,9.837c-1.354,1.354-3.546,1.354-4.889,0.014l-56.877-56.877
			c-0.066-0.083-0.146-0.142-0.218-0.218l-6.825-6.825c-0.653-0.651-1.011-1.517-1.011-2.433c0-0.923,0.365-1.795,1.026-2.457
			l9.837-9.837c0.679-0.679,1.569-1.018,2.457-1.018c0.882,0,1.763,0.336,2.433,1.004l63.92,63.92
			c0.653,0.651,1.011,1.517,1.011,2.433C200.637,88.534,200.273,89.406,199.611,90.068z"
			/>
	</g>
</g>

</svg>

            
            </span>

            <div className="container contact__container">
                <div className="contact__content">
                    <div className="content__title">
                        Let's talk
                        
                        
                    </div>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i class="uil uil-envelope-edit contact__card-icon"></i>
                            <div className="contact__card-title">Email</div>
                            <div className="contact__card-data">raihanfahim098@gmail.com</div>
                        </div>

                        <div className="contact__card">
                            <i class="uil uil-facebook-messenger-alt contact__card-icon"></i>
                            <div className="contact__card-title">Messenger</div>
                            <a href='https://m.me/RRFahim' className="contact__card-data" target="_blank">Click me</a>
                        </div>

                        <div className="contact__card">
                            <i class="uil uil-whatsapp contact__card-icon"></i>
                            <div className="contact__card-title">What's App</div>
                            <div className="contact__card-data">+880 152 145 4886</div>
                            {/* <div className="contact__card-data">+880 130 564 2784</div> */}
                        </div>

                    </div>
                </div>


                <div className="contact__content">
                    <div className="content__title">Tell me abut your project</div>
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
                                required />

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
