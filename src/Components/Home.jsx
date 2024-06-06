import React from 'react';
import './Home.css'; // Importing the CSS file
import 'typicons.font/src/font/typicons.css'; // Importing Typicons CSS

const Home = () => {
    return (
        <section id="home">
            <div className="title">
                <div><span className="typcn typcn-heart-outline icon heading"></span></div>
                <div className="smallsep heading"></div>
                <h1 className="heading">Aahaar Parikalak</h1>
                <h5 className="heading">Stay Fit, Live Long.</h5>
                <a className="smoothscroll" href="#about">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </a>
            </div>
            <a className="smoothscroll" href="#about">
                <div className="scroll-down"></div>
            </a>
        </section>
    );
};

export default Home;
