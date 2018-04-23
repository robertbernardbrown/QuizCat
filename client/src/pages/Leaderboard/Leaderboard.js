import React from "react";
import Header from "../../components/Header";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import LeaderboardComp from "../../components/Leaderboard/Leaderboard";

const Leaderboard = () => (
    <div>
        <SideBar/>
        <Header/>
        <Wrapper>
            <LeaderboardComp/>
        </Wrapper>
        <Footer/>
    </div>
)

export default Leaderboard;