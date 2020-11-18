import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SearchPage from "./pages/Search";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/search/:query" component={SearchPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
