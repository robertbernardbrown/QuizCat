import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import AboutComp from "../../components/About";

const About = () => (
    <div>
        <Header/>
        <Wrapper>
            <AboutComp/>
        </Wrapper> 
        <Footer/>
    </div>
)

export default About;