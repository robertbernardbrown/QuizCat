import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import Greeting from "../../components/Greeting";
import CountdownComp from "../../components/CountdownComp";
import SideBar from "../../components/SideBar";

class Main extends Component {
    render() {
        return (
            <div>
                <SideBar/>
                <Header/>
                <Wrapper>
                    <Greeting/>
                    <CountdownComp/>
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default Main;