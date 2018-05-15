import axios from "axios";
import dict from "./dict";

export default {
    fetchQuiz: (token) => {
        return axios.get("/api/fetchQuiz", {headers: {Authorization: `bearer ${token}`}});
    },
    getCategory: (token) => {
        console.log("GET should be hitting /api/category")
        return axios.get("/api/category", {headers: {Authorization: `bearer ${token}`}})
    },
    updateCategory: () => {
        console.log("PUT should be hitting /api/category")
        return axios.put("/api/category")
    },
    //not used but keeping just in case the category collection needs to change
    createCat: () => {
        console.log("POST should be hitting /api/category")
        return axios.post("/api/category")
    },
    login: userData => 
        axios.post("/user/login",  userData),
    signUp: userData => 
  	    axios.post('/user/signup', userData),
    quiz: token => {
        console.log(token);
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
        console.log(name);
        return axios.get("/user/getid", { 
            params: {
                name: name
            }
        });
    }


    
}