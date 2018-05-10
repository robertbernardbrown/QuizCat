import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import LeaderboardComp from "../../components/Leaderboard/Leaderboard";
import API from "../../utils/API";
import Auth from "../../utils/Auth";

class Leaderboard extends Component {

    state = {
        scores: [],
        categories: [],
        category: ""
    }

    componentDidMount() {
        API.fetchScores(this.state.category, Auth.getToken())
        .then(res=> {
            console.log(res);
            this.setState({
                scores: res.data
            });
        }).then(() => {
            console.log(this.state.scores)
        })
    }

    render() {
        return(
        <div>
            <Header/>
            <Wrapper>
                <LeaderboardComp scores={this.state.scores}/>
            </Wrapper>
            <Footer/>
        </div>
        )
    }
}

export default Leaderboard;