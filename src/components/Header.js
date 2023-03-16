import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            {/*Part 4 - Step 2*/}
            <div>Watchlist</div>
          </div>

          <ul className="nav-links">
            
            <li>
              {/*Part 4 - Step 2*/}
              <div>Watchlist</div>
            </li>

            <li>
              {/*Part 4 - Step 2*/}
              <div>Watched</div>
            </li>

            <li>
              {/*Part 4 - Step 2*/}
              <div className="btn btn-main">
                Discover
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
