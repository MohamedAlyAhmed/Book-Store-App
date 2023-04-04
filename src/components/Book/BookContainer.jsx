import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/Book-slice";
import { deleteBook } from "../../store/Book-slice";
const BookContainer = () => {
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState({});
  const { isLoading, books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBook = (bookData) => {
    const book = books.find((book) => book.id === bookData.id);
    setSelectedBook((prevState) => {
      return { ...prevState, ...book };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            dispatch={dispatch}
            deleteBook={deleteBook}
            getBook={getBook}
          />
        </div>
        <div className="col side-line">
          <BookInfo selectedBook={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
