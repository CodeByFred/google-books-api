import classes from "./Header.module.scss";
import image from "../../assets/unsplash.jpg";
import Title from "../Title/Title";
import quotes from "../../assets/quotes.json";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleClick, inputRef }) => {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomQuoteIndex].quote;

  return (
    <div className={classes.wrapper}>
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.content}>
        <Title />
        <small className={classes.quote}>"{randomQuote}"</small>
        <SearchBar handleClick={handleClick} term={inputRef} />
      </div>
    </div>
  );
};

export default Header;
