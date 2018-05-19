import React, {Component} from "react";
import FacebookLogin from 'react-facebook-login';
import API from "../../utils/API";
import "./FbLogin.css";

class FbLogin extends Component {

    componentClicked = (response) => {
        console.log(response);
        API.createFbUser();
    }

    render() {
        return(
            <FacebookLogin
            appId="240493756527031"
            autoLoad={false}
            fields="name,email,picture"
            // onClick={this.componentClicked}
            callback={this.componentClicked} 
            cssClass="btn btn-primary btn-block fb-btn"
            icon="fa-facebook"
            />
        )
    }
}

export default FbLogin;