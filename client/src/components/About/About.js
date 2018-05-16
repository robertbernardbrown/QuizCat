import React from "react";
import "../compStyle.css";
import "../About/About.css";

const About = () => (
    <div id="about">
        <div id="inner-about-div">
            <p>
                QuizCat is an hourly quiz built around offering different randomly-selected categories for each quiz.
            </p>
            <p>
                Each quiz is 12 questions of varying difficulty. Miss one and you're out for the rest of the quiz.
            </p>
            <p>
                To play, just pull up the site and log-in before the start of each hour to play!
            </p>
            <p>
                Example Topics:
            </p>
            <ul>
                <li>Film</li>
                <li>Music</li>
                <li>History</li>
                <li>Anime</li>
                <li>Art</li>
                <li>Video Games</li>
            </ul>
        </div>
    </div>
)

export default About;