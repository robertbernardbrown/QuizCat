import React, { Component } from "react";

class UserCount extends Component {
    state={
        socketConnected: false,
        userCount: 0
    }

    socket = this.props.socket

    componentDidMount() {
        console.log(this.props);
        this.socket.on("connect", (data) => {
            console.log("connected");
            this.setState({
                socketConnected: true,
                userCount: this.state.userCount + 1
            })
        });
      }

    userConnected = (props) => {
        console.log("hi")
        console.log(this.socket)
    }

    render(){
        return(
            <button className="btn btn-primary" onClick={this.userConnected}>Users online:{this.state.userCount}</button>
        )
    }
}

export default UserCount;