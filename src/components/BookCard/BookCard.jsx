import classes from "./BookCard.module.scss";
import placeholderImage from "../../assets/placeholder.jpg";

const BookCard = ({ book, index }) => {
  if (!book || !book.volumeInfo) return null;

  const {
    title = "Untitled",
    subtitle = "",
    authors = ["Unknown"],
    publishedDate = "Unknown",
    // pageCount = "N/A",
    // description = "No description available.",
    imageLinks,
    // industryIdentifiers,
  } = book.volumeInfo;

  const thumbnail = imageLinks?.thumbnail || placeholderImage;

  // const isbn =
  //   industryIdentifiers?.find((id) => id.type === "ISBN_13")?.identifier ||
  //   industryIdentifiers?.find((id) => id.type === "ISBN_10")?.identifier ||
  //   "N/A";

  const truncate = (text, limit) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className={classes.card} style={{ animationDelay: `${index * 0.2}s` }}>
      <div className={classes.img_container}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>
          <h2>{truncate(`${title} ${subtitle}`, 40)}</h2>
        </div>

        <p>
          <strong>Author(s):</strong> {truncate(authors.join(", "), 26)}
        </p>

        {/* <p>
          <strong>ISBN:</strong> {isbn}
        </p> */}
        <p>
          <strong>Published:</strong> {publishedDate}
        </p>
        {/* <p>
          <strong>Pages:</strong> {pageCount}
        </p> */}
        {/* <p>
          <strong>Description:</strong> {truncate(description, 125)}
        </p> */}
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
