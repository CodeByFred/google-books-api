import classes from "./Results.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";
import BookSearch from "../../hooks/BookSearch";
import Button from "../Button/Button";

const Results = ({ handleClick, query, inputRef }) => {
  return (
    <>
      <div className={classes.results}>
        <Title />
        <SearchBar handleClick={handleClick} term={inputRef} />
        <BookSearch term={query} />
      </div>
    </>
  );
};

export default Results;

/* 

 */
