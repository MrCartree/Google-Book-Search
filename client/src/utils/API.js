import axios from "axios";
// const BASEURL = process.env.BASEURL;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
// const APIKEY = "+intitle:keyes&key=AIzaSyBvIe5Wkvxle-IqLenR1wnu8Qkgw78wBck";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
