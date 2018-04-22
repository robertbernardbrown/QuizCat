import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import About from "../../components/About";

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Wrapper>
                    <About/>
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default Main;