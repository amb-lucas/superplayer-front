import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/scrollToTop";

import Header from "./components/header";
import Footer from "./components/footer";

import HomePage from "./pages/Home";
import ProfilePageIndex from "./pages/Profile";
import SearchPage from "./pages/Search";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePageIndex} />
          <Route path="/search/:query" component={SearchPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
