import { useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";

function App() {
  const [query, setQuery] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    const value = inputRef.current?.value.trim();
    if (value.length >= 2) setQuery(value);
  };

  return (
    <>
      <main>
        {query ? (
          <Results handleClick={handleClick} inputRef={inputRef} query={query} />
        ) : (
          <Header inputRef={inputRef} handleClick={handleClick} />
        )}
      </main>
    </>
  );
}

export default App;
