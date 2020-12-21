import React, { useState } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm/SearchForm"
import BookDetail from "../BookDetail/BookDetail";

function BookContainer() {

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  async function searchBooks(query) {

    await API.search(query)
    
      .then(res => setResult(res.data.items))
      .catch(err => console.log(err));
    };
    console.log(result);

  function handleInputChange(event) {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(search)
    searchBooks(search);
  }

  return (
    <div>
      <SearchForm
       value={search}
       handleInputChange={handleInputChange}
       handleFormSubmit={handleFormSubmit}     
       />
      <BookDetail results={result} />
    </div>
  )
}

export default BookContainer;
