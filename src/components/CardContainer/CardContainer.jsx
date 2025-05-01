import { useState } from "react";
import classes from "./CardContainer.module.scss";
import BookCard from "../BookCard/BookCard";
import BookModal from "../BookModal/BookModal";
import placeholderImage from "../../assets/placeholder.jpg";

const CardContainer = ({ book }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const truncate = (text, limit) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  return (
    <div className={classes.container}>
      {book.map((aBook, index) => {
        const info = aBook.volumeInfo || {};

        const displayProps = {
          title: truncate(
            `${info.title || "Untitled"} ${info.subtitle || ""}`.trim(),
            35
          ),
          authors: truncate((info.authors || ["Unknown"]).join(", "), 26),
          publishedDate: info.publishedDate || "Unknown",
          thumbnail: info.imageLinks?.thumbnail || placeholderImage,
          animationDelay: `${index * 0.2}s`,
        };

        return (
          <BookCard
            key={aBook.id || index}
            index={index}
            {...displayProps}
            onClick={() =>
              setSelectedBook({
                title: info.title || "Untitled",
                subtitle: info.subtitle || "",
                authors: info.authors || ["Unknown"],
                publishedDate: info.publishedDate || "Unknown",
                pages: info.pageCount || "N/A",
                description: info.description || "No description available.",
                thumbnail: info.imageLinks?.thumbnail || placeholderImage,
              })
            }
          />
        );
      })}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

export default CardContainer;
