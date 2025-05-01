import classes from "./Results.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";
import BookSearch from "../../hooks/BookSearch";

const Results = ({ handleClick, query, inputRef }) => {
  return (
    <>
      <div className={classes.results}>
        <Title />
        <SearchBar handleClick={handleClick} term={inputRef} />
        {query && (
          <p className={classes.queryResult}>
            Showing results for: <strong>"{query}"</strong>
          </p>
        )}
        <BookSearch term={query} />
      </div>
    </>
  );
};

export default Results;
