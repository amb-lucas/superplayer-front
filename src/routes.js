import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./components/scrollToTop";

import PrivateRoute from "./components/privateRoute";
import Header from "./components/header";
import Footer from "./components/footer";

import HomePage from "./pages/Home";
import ProfilePageIndex from "./pages/Profile";
import SearchPageIndex from "./pages/Search";
import RegisterPageIndex from "./pages/Register";
import LoginPageIndex from "./pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePageIndex} />
          <PrivateRoute path="/search" component={SearchPageIndex} />
          <Route path="/register" component={RegisterPageIndex} />
          <Route path="/login" component={LoginPageIndex} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
