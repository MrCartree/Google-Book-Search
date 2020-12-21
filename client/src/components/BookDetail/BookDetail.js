import React from "react";

function BookDetail(props) {
  return (
    console.log({...props.results}),
      <ul className="" >
        {props.results.map(result => (
          <li key={result.accessInfo.id}>
            <h2>{result.volumeInfo.title}</h2>
            <h3>{result.volumeInfo.authors}</h3>
            <p>{result.volumeInfo.description}</p>
            <img src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : null} alt={result.volumeInfo.title} />
            <a href={result.volumeInfo.infoLink} target="_blank" rel="noreferrer" >Book Info</a>
            <button>Save</button>
          </li>
        ))}
      </ul>
  );
}

export default BookDetail;