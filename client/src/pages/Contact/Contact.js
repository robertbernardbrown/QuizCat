import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import ContactComp from "../../components/Contact";

const Contact = () => (
    <div>
        <Header/>
        <Wrapper>
            <ContactComp/>
        </Wrapper>
        <Footer/>
    </div>
)

export default Contact;