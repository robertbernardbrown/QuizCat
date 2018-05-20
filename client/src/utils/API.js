import axios from "axios";

export default {
    fetchQuiz: (token) => {
        return axios.get("/api/fetchQuiz", {headers: {Authorization: `bearer ${token}`}});
    },
    getCategory: (token) => {
        return axios.get("/api/category", {headers: {Authorization: `bearer ${token}`}})
    },
    updateCategory: () => {
        return axios.put("/api/category")
    },
    //not used but keeping just in case the category collection needs to change
    createCat: () => {
        return axios.post("/api/category")
    },
    login: userData => 
        axios.post("/user/login",  userData),
    signUp: userData => 
  	    axios.post('/user/signup', userData),
    quiz: token => {
        return axios.get('/api/user', {headers: {Authorization: `bearer ${token}`}})
    },
    saveScore: (userData, token) => {
        axios.post("/api/scores", userData, {headers: {Authorization: `bearer ${token}`}});
    },
    fetchScores: (category, token) => {
        return axios.get("/api/getScores/"+category, {headers: {Authorization: `bearer ${token}`}});
    },
    fetchUserScores: (user, token) => {
        return axios.get("/api/getUserScores/"+user, {headers: {Authorization: `bearer ${token}`}});
    },
    fetchId: (name) => {
        return axios.get("/user/getid", { 
            params: {
                name: name
            }
        });
    },
    createFbUser: (userData) => {
        let access_token = userData.accessToken;
        axios.post("/user/oauth/facebook/token?access_token="+access_token, userData);
    },


    
}