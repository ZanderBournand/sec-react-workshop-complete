import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Discover } from "./components/Discover";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    // Part 2 - Step 4
    <GlobalProvider>
      <Router>
        <Header />
        {/*Part 4 - Step 1*/}
        <Switch>
          <Route exact path="/">
              <Discover />
          </Route>
          <Route path="/watchlist">
              <Watchlist />
          </Route>
          <Route path="/watched">
              <Watched />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
