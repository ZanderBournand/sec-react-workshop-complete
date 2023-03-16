import React, { useState , useEffect } from "react";
import { ResultCard } from "./ResultCard";

export const Discover = () => {
  const [query, setQuery] = useState("");
  // Part 1 - Step 1
  const [results, setResults] = useState([]);

  // Part 1 - Step 6
  useEffect(() => {
    defaultSearch();
  }, [])

  const onChange = (e) => {
    setQuery(e.target.value);

    // Part 1 - Step 5
    if (e.target.value === "") {
      defaultSearch();
      return;
    }

    // Part 1 - Step 2
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d545941f580f054e81baf32eccb258c2&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  // Part 1 - Step 4
  const defaultSearch = () => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=d545941f580f054e81baf32eccb258c2`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              onChange={onChange}
              value={query}
            />
          </div>

          {/*Part 1 - Step 3*/}
          {results.length > 0 && (
          <div className="results">
              {results.map((movie) => (
                <ResultCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
