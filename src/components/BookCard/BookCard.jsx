import classes from "./BookCard.module.scss";
import placeholderImage from "../../assets/placeholder.jpg";

const BookCard = ({ book }) => {
  if (!book || !book.volumeInfo) return null;

  const {
    title = "Untitled",
    authors = [],
    publishedDate = "Unknown",
    pageCount = "N/A",
    description = "No description available.",
    imageLinks,
    industryIdentifiers,
  } = book.volumeInfo;

  const thumbnail = imageLinks?.thumbnail || placeholderImage;

  const isbn =
    industryIdentifiers?.find((id) => id.type === "ISBN_13")?.identifier ||
    industryIdentifiers?.find((id) => id.type === "ISBN_10")?.identifier ||
    "N/A";

  const truncate = (text, limit = 125) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className={classes.card}>
      <img src={thumbnail} alt={title} />
      <div className={classes.details}>
        <h2>{title}</h2>
        {authors.length > 0 && (
          <p>
            <strong>Author(s):</strong> {authors.join(", ")}
          </p>
        )}
        <p>
          <strong>ISBN:</strong> {isbn}
        </p>
        <p>
          <strong>Published:</strong> {publishedDate}
        </p>
        <p>
          <strong>Pages:</strong> {pageCount}
        </p>
        <p>
          <strong>Description:</strong> {truncate(description)}
        </p>
      </div>
    </div>
  );
};

export default BookCard;

/* 
Book Card:
- Image url or placeholder
- Info section:
  -Title
  -Author
  -ISBN
  -Published Date
  -Pages
  -Description
 */
