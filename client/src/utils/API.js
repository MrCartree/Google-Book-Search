import axios from "axios";
const BASEURL = process.env.BASEURL;
const APIKEY = process.env.APIKEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
