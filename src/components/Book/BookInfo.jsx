import React, { Fragment } from "react";

const BookInfo = ({ selectedBook }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.values(selectedBook).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {selectedBook.title}</p>
          <p className="fw-light">Description: {selectedBook.description}</p>
          <p className="fst-italic">Price: ${selectedBook.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
