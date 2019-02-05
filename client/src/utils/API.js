import axios from "axios";

export default {
 // Gets all books
 getUsers: function() {
   return axios.get("/api/users");
 },
 // Gets the book with the given id
 getUser: function(id) {
   return axios.get("/api/users/" + id);
 },
 registerUser: function() {
    return axios.post("/api/users/");
  },
 // Deletes the book with the given id
 deleteItems: function(id) {
   return axios.delete("/api/tobuy/" + id);
 },
 // Saves a book to the database
 saveUser: function(userData) {
   return axios.post("/api/users/",  userData);
 }

/**takes in a use object with an email and password property returns the user and token*/

//  logInUser: (user) => {
//   const endpoint = "/api/users";
//   const body = { ...user }
//   const requestOptions = {}
//   return axios.post(endpoint, body, requestOptions)
//       .then(response => {
//           return response.data.user
//       })
// },
// getUserInfo: (userId) => {
//   const endpoint = `/api/users/${userId}`;
//   const requestOptions = {}
//   return axios.get(endpoint, requestOptions)
//       .then(response => {
//           return response.data
//       })
// }


};