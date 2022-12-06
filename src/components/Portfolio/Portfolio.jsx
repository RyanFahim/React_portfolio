import React from 'react'
import './portfolio.css'
import weather from '../../assets/weather.jpeg'
import snake from '../../assets/snake.jpg'
import movie from "../../assets/movie.jpg"
import faq from "../../assets/faq.png"



const Portfolio = () => {

    const portfolio_data = [
        {
            'id': 1,
            'img': weather,
            'title': "Weather App",
            'desc': `Weather app is a app that will show a city's weather situation by searching the city name`,
            'github_link': "https://github.com/RyanFahim/Weather_app",
            'live_link': "https://weatherscan.netlify.app/"
        },
        {
            'id': 2,
            'img': movie,
            'title': "Movie Mania",
            'desc': `Movie-mania is a live website where we can search about movies and it's by searching any movie name.`,
            'github_link': "https://github.com/RyanFahim/Snake_game",
            'live_link': "https://moviemania-rrf.netlify.app/"
        },

        {
            'id': 3,
            'img': snake,
            'title': "Snake Game",
            'desc': 'A simple classic snake game. Can be played on pc. use the arrow key buttons to play. ',
            'github_link': "https://github.com/RyanFahim/Snake_game",
            'live_link': "https://snakegame-rrf.netlify.app/"
        },
        {
            'id': 4,
            'img': faq,
            'title': "FAQ",
            'desc': 'An example of frequently asked question is given answer which can be used as module for big projects.',
            'github_link': "https://github.com/RyanFahim/Snake_game",
            'live_link': "https://fqa-example.netlify.app/"
        },



    ]

    return (
        <>
            <section className="portfolio section" id='portfolio'>
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">
                    Recent works
                </span>
                
                <div className="container portfolio__container">

                    {portfolio_data.map(i => (


                        <div className="grid portfolio__card">
                            <img src={i.img} alt="work_image" className="portfolio__image"  />
                            <h2 className="portfolio__title">{i.title}</h2>
                            <p className="portfolio__description">
                                {i.desc}
                            </p>

                            <div className="portfolio__social">
                                {/* <i class="uil uil-github portfolio__social_icon" className="portfolio__social_icon"></i> */}
                                {/* <i class="uil uil-map-pin" className="ortfolio__social_icon"></i> */}

                                {/* <a href={i.github_link} className="portfolio__social_icon" target="_blank">
                                    <i class="uil uil-github"></i>
                                </a> */}

                                <a href={i.live_link} className="portfolio__social_icon_a" target="_blank">
                                    Live demo
                                </a>
                            </div>

                        </div>

                    ))}


                </div>
            
            </section>
        </>
    )
}

export default Portfolio