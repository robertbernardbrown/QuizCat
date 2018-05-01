import axios from "axios";

var dict = {};
dict['Any'] = "https://opentdb.com/api.php?amount=12";
dict['General'] = "https://opentdb.com/api.php?amount=12&category=9";
dict['Books'] = "https://opentdb.com/api.php?amount=12&category=10";
dict['Film'] = "https://opentdb.com/api.php?amount=12&category=11";
dict['Music'] = "https://opentdb.com/api.php?amount=12&category=12";
dict['Theatre'] = "https://opentdb.com/api.php?amount=12&category=13";
dict['TV'] = "https://opentdb.com/api.php?amount=12&category=14";
dict['Video Games'] = "https://opentdb.com/api.php?amount=12&category=15";
dict['Board Games'] = "https://opentdb.com/api.php?amount=12&category=16";
dict['Nature'] = "https://opentdb.com/api.php?amount=12&category=17";
dict['Computers'] = "https://opentdb.com/api.php?amount=12&category=18";
dict['Math'] = "https://opentdb.com/api.php?amount=12&category=19";
dict['Mythology'] = "https://opentdb.com/api.php?amount=12&category=20";
dict['Sports'] = "https://opentdb.com/api.php?amount=12&category=21";
dict['Geography'] = "https://opentdb.com/api.php?amount=12&category=22";
dict['History'] = "https://opentdb.com/api.php?amount=12&category=23";
dict['Politics'] = "https://opentdb.com/api.php?amount=12&category=24";
dict['Art'] = "https://opentdb.com/api.php?amount=12&category=25";
dict['Celebrities'] = "https://opentdb.com/api.php?amount=12&category=26";
dict['Animals'] = "https://opentdb.com/api.php?amount=12&category=27";
dict['Vehicles'] = "https://opentdb.com/api.php?amount=12&category=28";
dict['Comics'] = "https://opentdb.com/api.php?amount=12&category=29";
dict['Gadgets'] = "https://opentdb.com/api.php?amount=12&category=30";
dict['Anime'] = "https://opentdb.com/api.php?amount=12&category=31";
dict['Cartoons'] = "https://opentdb.com/api.php?amount=12&category=32";

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
    //not used but keeping just in case the category collection needs to change
    createCat: () => {
        console.log("POST should be hitting /api/category")
        return axios.post("/api/category")
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