import React, { useEffect } from 'react';
import { useGlobalContext } from '../utils/GlobalContext';
import API from "../utils/API"

const ViewBooks = () => {
  const [state, dispatch] = useGlobalContext();
  console.log({ state })

  function onClick(id) {
    API.deleteBook(id)
      .then(res => fetchBook())
      .catch(err => console.log(err));

  }

  async function fetchBook() {
    try {
      const response = await fetch('/api/book');
      const json = await response.json();
      console.log({ json });

      dispatch({ type: 'setBooks', payload: json.data });
    } catch (err) {
      console.log({ err });
    }
  }

  useEffect(() => {
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <h3 className="">Saved Books</h3>
      <ul className="">
        {state.books.map(book => (
          <div key={book._id} className="card text-center">
            <div className="card-header">
              <img src={book.image ? book.image : null} alt={book.title} />
            </div>
            <div className="card-body">
              <h2>{book.title}</h2>
              <h3>{book.authors}</h3>
              <p>{book.description}</p>
              <a href={book.link} target="_blank" rel="noreferrer" >Book Info</a>
              <div>
                <button className="btn btn-primary" onClick={() => onClick(book._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};



export default ViewBooks;