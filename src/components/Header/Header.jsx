import classes from "./Header.module.scss";
import image from "../../assets/unsplash.jpg";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleClick, inputRef }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.content}>
        <Title />
        <small className={classes.quote}>
          “If you don't like to read, you haven't found the right book.”
        </small>
        <SearchBar handleClick={handleClick} term={inputRef} />
      </div>
    </div>
  );
};

export default Header;
