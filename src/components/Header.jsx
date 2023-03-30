import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { hasError } = useSelector((state) => state.books);
  return (
    <Fragment>
      {hasError && (
        <div class="alert alert-danger mb-0" role="alert">
          Failed to Fetch Data!
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark text-center ">
        <h1 className="text-white w-100">Book Store with (Redux ToolKit)</h1>
      </nav>
    </Fragment>
  );
};

export default Header;
