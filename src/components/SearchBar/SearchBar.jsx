import classes from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <>
      <label htmlFor="search"></label>
      <input
        className={classes.search}
        type="text"
        id="search"
        placeholder="Search by title, author, or ISBN"
        autoComplete="off"
      />
    </>
  );
};

export default SearchBar;
