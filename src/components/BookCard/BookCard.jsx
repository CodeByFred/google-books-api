import classes from "./BookCard.module.scss";

const BookCard = ({
  title,
  authors,
  publishedDate,
  thumbnail,
  animationDelay,
  onClick,
}) => {
  return (
    <div
      className={classes.card}
      style={{ animationDelay: animationDelay }}
      onClick={onClick}
    >
      <div className={classes.img_container}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>
          <h2>{title}</h2>
        </div>
        <p>
          <strong>Author(s):</strong> {authors}
        </p>
        <p>
          <strong>Published:</strong> {publishedDate}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
