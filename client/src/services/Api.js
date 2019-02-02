import axios from "axios";

export default {

    /**takes in a use object with an email and password property returns the user and token*/
    logInUser: (user) => {
        const endpoint = "/api/users";
        const body = { ...user }
        const requestOptions = {}
        return axios.post(endpoint, body, requestOptions)
            .then(response => {
                return response.data.user
            })
    },
    getUserInfo: (userId) => {
        const endpoint = `/api/users/${userId}`;
        const requestOptions = {}
        return axios.get(endpoint, requestOptions)
            .then(response => {
                return response.data
            })
    }
}