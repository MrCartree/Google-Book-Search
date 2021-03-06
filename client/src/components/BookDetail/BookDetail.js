import React from "react";
import "./BookDetail.css"

function BookInfo(props) {

  function onClick(e) {
    e.preventDefault();

    fetch('/api/book', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        authors: props.volumeInfo.authors,
        description: props.volumeInfo.description,
        image: props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : null,
        link: props.volumeInfo.infoLink,
        title: props.volumeInfo.title
      })
    }).then(res => res.json())
      .then(res => console.log(res));
  }
  return (

    <div className="card text-center">
      <div className="card-header">
        <img src={props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : null} alt={props.volumeInfo.title} />
      </div>
      <div className="card-body">
        <h2>{props.volumeInfo.title}</h2>
        <h3>{props.volumeInfo.authors}</h3>
        <p>{props.volumeInfo.description}</p>
        <a href={props.volumeInfo.infoLink} target="_blank" rel="noreferrer" >Book Info</a>
        <div>
          <button className="btn btn-primary" onClick={onClick}>Save</button>
        </div>
      </div>
    </div>


  )
}

function BookDetail(props) {
  return (
    console.log({ ...props.results }),
    <ul className="" >
      {props.results.map(result => (
        <BookInfo key={result.id} {...result} />
      ))}
    </ul>
  );
}

export default BookDetail;