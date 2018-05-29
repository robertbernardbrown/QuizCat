import React, { Component } from "react";
import "./UserCount.css";

class UserCount extends Component {
    state = {
        socketConnected: false,
        userCount: 0,
        activeUsers: 0
    }

    socket = this.props.socket

    componentDidMount() {
        this.socket.on("broadcast", (data) => {
            console.log(data);
            this.setState({
                userCount: data.userCount,
                activeUsers: data.activeUsers
            })
        })
    }

    render(){
        return(
            <div>
                {this.props.stillIn && this.props.quizTime ? 
                <p id="users">Kitties still quizzing: {this.state.activeUsers}</p> : 
                <p id="users">There are {this.state.userCount} cool cats ready to quiz</p>}
            </div>
        )
    }
}

export default UserCount;