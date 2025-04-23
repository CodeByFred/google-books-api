import { useState, useEffect } from "react";
import { getBooks } from "../api/google-api.js";
import CardContainer from "../components/CardContainer/CardContainer.jsx";

const BookSearch = ({ term }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [searchStatus, setSearchStatus] = useState(null);

  useEffect(() => {
    setSearchStatus("FETCHING");
    getBooks(term)
      .then((items) => {
        setSearchStatus("SUCCESS");
        setItems(items);
      })
      .catch((e) => {
        setSearchStatus("FAIL");
        setError(e);
        console.log(e);
      });
  }, [term]);

  return (
    <>
      {searchStatus == "FETCHING" && <p>Getting Book Results</p>}
      {searchStatus == "FAIL" && (
        <p style={{ color: "red" }}>Failure to Retrive Book(s) Information: {error}</p>
      )}
      {searchStatus === "SUCCESS" && <CardContainer book={items} />}
    </>
  );
};

export default BookSearch;
