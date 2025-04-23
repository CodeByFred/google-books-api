import classes from "./SearchBar.module.scss";
import Button from "../Button/Button";

const SearchBar = ({ handleClick, term }) => {
  return (
    <div className={classes.container}>
      <label htmlFor="search"></label>
      <input
        className={classes.search}
        type="text"
        id="search"
        placeholder="Search by title, author, or ISBN"
        autoComplete="off"
        ref={term}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleClick();
          }
        }}
      />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default SearchBar;
