import { useState, useEffect } from "react";
import { getBooks } from "../api/google-api.js";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      {searchStatus == "FETCHING" && (
        <>
          <p>Getting Book Results</p>
          <DotLottieReact
            src="https://lottie.host/113c463c-fac0-4827-a535-3cad73e07c19/JKfbtzAayJ.lottie"
            loop
            autoplay
            style={{ width: "400px", height: "400px" }}
          />
        </>
      )}
      {searchStatus == "FAIL" && (
        <p style={{ color: "red" }}>Failure to Retrive Book(s) Information: {error}</p>
      )}
      {searchStatus === "SUCCESS" && (
        <>
          {Array.isArray(items) && items.length > 0 ? (
            <CardContainer book={items} />
          ) : (
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <p>Try a different title, author, or ISBN.</p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BookSearch;
