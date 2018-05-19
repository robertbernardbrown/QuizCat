import React from "react";
import FacebookLogin from 'react-facebook-login';
import "./FbLogin.css";

const FbLogin = () => (
    <FacebookLogin
    appId="240493756527031"
    autoLoad={true}
    fields="name,email,picture"
//   onClick={componentClicked}
    callback={FbLogin} 
    cssClass="btn btn-primary btn-block fb-btn"
    icon="fa-facebook"
    />
);

export default FbLogin;