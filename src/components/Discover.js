import React, { useState , useEffect } from "react";
import { ResultCard } from "./ResultCard";

export const Discover = () => {
  const [query, setQuery] = useState("");
  // Part 1 - Step 1

  // Part 1 - Step 6

  const onChange = (e) => {
    setQuery(e.target.value);

    // Part 1 - Step 5

    // Part 1 - Step 2
  };

  // Part 1 - Step 4

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

        </div>
      </div>
    </div>
  );
};
