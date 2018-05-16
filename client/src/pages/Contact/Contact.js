import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import ContactComp from "../../components/Contact";
import "./Contact.css";
import "../../components/compStyle.css";

const Contact = () => (
    <div className="site">
        <Header/>
        <Wrapper>
            <ContactComp/>
        </Wrapper>
        <Footer/>
    </div>
)

export default Contact;