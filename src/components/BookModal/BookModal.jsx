import classes from "./BookModal.module.scss";

const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  const { title, authors, description, publishedDate, pages, thumbnail } = book;

  return (
    <div className={classes.modal_backdrop} onClick={onClose}>
      <div className={classes.modal_info} onClick={(e) => e.stopPropagation()}>
        <button className={classes.close} onClick={onClose}>
          x
        </button>
        <img src={thumbnail} alt={title} />
        <h2>{title}</h2>
        <p>
          <strong>Authors:</strong> {authors.join(", ")}
        </p>
        <p>
          <strong>Published:</strong> {publishedDate}
        </p>
        <p>
          <strong>Pages:</strong> {pages}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BookModal;
