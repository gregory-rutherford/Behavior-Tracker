import axios from "axios";

export default {
    createNewTask = () => {
        return axios({
            method: "post",
            url: "http://localhost:3030/api/data",
        })
    }
}