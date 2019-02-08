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


};