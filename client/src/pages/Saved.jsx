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
    <div className="Todos">
      <h3 className="Todos-header">Current Todos</h3>
      <ul className="Todos-list">
        {state.books.map(book => (
          <li key={book._id} className="books-listItem">
            <span>
              <h2>{book.title}</h2>
              <h3>{book.authors}</h3>
              <img src={book.image ? book.image : null} alt={book.title} />
              <p>{book.description}</p>
              <a href={book.link} target="_blank" rel="noreferrer" >Book Info</a>
              <button onClick={() => onClick(book._id)}>Delete</button>
            </span>
          </li>
        ))}

      </ul>
    </div>
  );
};



export default ViewBooks;