import React from "react";

const BooksList = ({ isLoading, books }) => {
  const booksList = books.length > 0 ? books.map((book) => (
    <li
      key={book.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>{book.title}</div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          Read
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )): 'No Books Avaliable !';
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status"></div>
      ) : (
        <ul className="list-group">{booksList}</ul>
      )}
    </div>
  );
};

export default BooksList;
