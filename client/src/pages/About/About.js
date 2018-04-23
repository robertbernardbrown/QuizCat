import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";

class About extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <Header/>
                <Wrapper>
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default About;