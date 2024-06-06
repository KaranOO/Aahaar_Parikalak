import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <h1>About</h1>
                    <div className="block"></div>
                    <p>Hello! I'm Karan Negi, a final-year B.Tech student majoring in Computer Science Engineering with a passion for technology and innovative solutions. I excel in data science, web development, and AI, bringing creativity and tenacity to every project.</p>
                </div>
                <div className="row">
                    <div className="six columns">
                        <h3><span className="typcn typcn-device-desktop icon"></span>Our Process</h3>
                        <p>Our process begins with thorough research to understand project needs and the target audience. We then create a detailed strategy to guide our work. Using agile methods, we develop and test our solutions to ensure they meet high standards. Continuous improvement is key; we refine and enhance our solutions to achieve the best results.</p>
                    </div>
                    <div className="six columns">
                        <h3><span className="typcn typcn-pen icon"></span>Our Approach</h3>
                        <p>Our approach is rooted in creativity and collaboration. We encourage innovative and unique ideas while working together to achieve the best outcomes. Focusing on the user, we design engaging and easy-to-use experiences. Our decisions are data-driven, ensuring we stay aligned with the latest trends and technologies.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <h3><span className="typcn typcn-cog-outline icon"></span>Our Goal</h3>
                        <p>Our goal is to bridge the gap between technology and users, making tech both easy and useful. We strive to innovate, creating advanced solutions in AI and web development that exceed expectations. Delivering high-quality and valuable results is our top priority.</p>
                    </div>
                    <div className="six columns">
                        <h3><span className="typcn typcn-lightbulb icon"></span>Our Mission</h3>
                        <p>Our mission is to drive progress in technology and creativity, making a positive impact through our work. We aim to inspire growth and support learning in the tech industry. By solving real-world problems, we use our skills to make a meaningful difference.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
