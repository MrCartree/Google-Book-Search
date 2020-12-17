import React from "react";
import API from "../../utils/API";

function BookContainer() {

    function searchMovies(query) {
        API.search(query)
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

    return(  

        <button onClick={searchMovies} >Search</button>
    )
}









