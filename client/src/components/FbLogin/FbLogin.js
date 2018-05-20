import React, {Component} from "react";
import FacebookLogin from 'react-facebook-login';
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import "./FbLogin.css";

class FbLogin extends Component {

    componentLoaded = (response) => {
        let access_token = response.accessToken;
        API.createFbUser(response, access_token).then(res=> {
            Auth.authenticateUser(res.data.token);
            this.props.toggleAuthenticateStatus()
        })
    }

    render() {
        return(
            <FacebookLogin
            appId="240493756527031"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.componentLoaded} 
            cssClass="btn btn-primary btn-block fb-btn"
            icon="fa-facebook"
            />
        )
    }
}

export default FbLogin;