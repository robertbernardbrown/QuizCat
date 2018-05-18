import React from "react";
import "../compStyle.css";
import "../About/About.css";

const About = () => (
    <div id="about">
        <div id="inner-about-div">
            <p>
                QuizCat is a quiz that runs on every 5th minute of the hour. It's built around offering different randomly-selected categories for each quiz.
            </p>
            <p>
                Each quiz is 12 questions of varying difficulty. Miss one and you're OUT for the rest of the quiz(no participation trophies here).
            </p>
            <p>
                To play, just pull up the site, login, and wait for the next quiz to start!
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