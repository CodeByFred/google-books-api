import classes from "./CardContainer.module.scss";
import BookCard from "../BookCard/BookCard";

const CardContainer = ({ book }) => {
  return (
    <div className={classes.container}>
      {book
        ? book.map((aBook, index) => <BookCard key={index} index={index} book={aBook} />)
        : null}
    </div>
  );
};

export default CardContainer;
