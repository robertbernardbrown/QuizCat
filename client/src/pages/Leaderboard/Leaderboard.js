import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import LeaderboardComp from "../../components/Leaderboard/Leaderboard";
import LeaderboardFilter from "../../components/LeaderboardFilter";
import API from "../../utils/API";
import Auth from "../../utils/Auth";

class Leaderboard extends Component { 

    state = {
        scores: [],
        categories: [
            'Any',
            'General',
            'Books',
            'Film',
            'Music',
            'Theatre',
            'TV',
            'Video Games',
            'Board Games',
            'Nature',
            'Computers',
            'Math',
            'Mythology',
            'Sports',
            'Geography',
            'History',
            'Politics',
            'Art',
            'Celebrities',
            'Animals',
            'Vehicles',
            'Comics',
            'Gadgets',
            'Anime',
            'Cartoons',
        ],
        category: ""
    }

    componentDidMount() {
        this.fetchScores();
    }

    fetchScores = () => {
        API.fetchScores(this.state.category, Auth.getToken())
        .then(res=> {
            console.log(res);
            this.setState({
                scores: res.data
            });
        })
    }

    filterCategory = (category) => {
        this.setState({
            category: category
        }, this.fetchScores);
    }

    render() {
        return(
        <div>
            <Header/>
            <Wrapper>
                <LeaderboardFilter categories={this.state.categories} filterCategory={this.filterCategory}/>
                <LeaderboardComp scores={this.state.scores}/>
            </Wrapper>
            <Footer/>
        </div>
        )
    }
}

export default Leaderboard;