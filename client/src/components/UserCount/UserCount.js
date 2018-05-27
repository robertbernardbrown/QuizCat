import React, { Component } from "react";

class UserCount extends Component {
    state = {
        socketConnected: false,
        userCount: 0
    }

    socket = this.props.socket

    componentDidMount() {
        this.socket.on("connect", (data) => {
            console.log("connected");
        })
        this.socket.on("broadcast", (data) => {
            // console.log(data);
            this.setState({
                userCount: data
            })
        })
    }

    userConnected = (props) => {
        console.log("hi")
        console.log(this.socket)
    }

    render(){
        return(
            <button className="btn btn-primary" onChange={this.listen} onClick={this.userConnected}>Users online:{this.state.userCount}</button>
        )
    }
}

export default UserCount;