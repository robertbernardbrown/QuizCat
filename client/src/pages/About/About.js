import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import AboutComp from "../../components/About";

const About = () => (
    <div className="site">
        <Header/>
        <Wrapper>
            <AboutComp/>
        </Wrapper> 
        <Footer/>
    </div>
)

export default About;