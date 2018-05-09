import axios from "axios";
import dict from "./dict";

export default {
    getQuiz: (key) => {
        let index =  dict[key]
        console.log(index)
        return axios.get(index);
    },
    getCategory: () => {
        console.log("GET should be hitting /api/category")
        return axios.get("/api/category")
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
    saveScore: (userData) => {
        axios.post("/api/scores", userData);
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

// getQuiz: () => {
//     return axios.get("https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=multiple", {
//         params: {
//             'api-key'   : "3d18b69255a54a70b618943840ed2390",
//             'q'         : topic,
//             'begin_date': start,
//             'end_date'  : end
//         }
//     })
// }