import React from "react";
import classes from "./Search.module.css";

function Search() {
  return (
    <div className={classes.Search}>
      <form className="form-inline ml-auto">
        <div className="md-form my-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
