import React, {Component} from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import LeaderboardComp from "../../components/Leaderboard/Leaderboard";
import LeaderboardFilter from "../../components/LeaderboardFilter";
import API from "../../utils/API";
import Auth from "../../utils/Auth";
import LeaderboardSearch from "../../components/LeaderboardSearch";

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

    className = "col-md-6 col-sm-6 col-xs-12";

    render() {
        return(
        <div>
            <Header/>
            <Wrapper>
                <div className="row">
                    <LeaderboardSearch className={this.className}/>
                    <LeaderboardFilter className={this.className} categories={this.state.categories} filterCategory={this.filterCategory}/>
                </div>
                <LeaderboardComp scores={this.state.scores}/>
            </Wrapper>
            <Footer/>
        </div>
        )
    }
}

export default Leaderboard;