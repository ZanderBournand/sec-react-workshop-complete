import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            {/*Part 4 - Step 2*/}
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            
            <li>
              {/*Part 4 - Step 2*/}
              <Link to="/watchlist">Watchlist</Link>
            </li>

            <li>
              {/*Part 4 - Step 2*/}
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              {/*Part 4 - Step 2*/}
              <Link to="/" className="btn btn-main"> Discover </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
