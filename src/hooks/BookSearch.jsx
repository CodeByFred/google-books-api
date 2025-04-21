import { useState, useEffect } from "react";
import { getBooks } from "../api/google-api.js";
import BookCard from "../components/BookCard/BookCard";

const BookSearch = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [searchStatus, setSearchStatus] = useState(null);

  useEffect(() => {
    setSearchStatus("FETCHING");
    getBooks("flowers+for+algernon")
      .then((items) => {
        setSearchStatus("SUCCESS");
        setItems(items);
      })
      .catch((e) => {
        setSearchStatus("FAIL");
        setError(e);
        console.log(error);
      });
  }, []);

  return (
    <>
      {searchStatus == "FETCHING" && <p>Getting Book Results</p>}
      {searchStatus == "FAIL" && (
        <p style={{ color: "red" }}>Failure to Retrive Book(s) Information</p>
      )}
      {searchStatus === "SUCCESS" && <BookCard book={items} />}
    </>
  );
};

export default BookSearch;
