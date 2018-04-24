import axios from "axios";

export default {
    getQuiz: () => {
        return axios.get("https://opentdb.com/api.php?amount=12&category=9&difficulty=easy&type=multiple")
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