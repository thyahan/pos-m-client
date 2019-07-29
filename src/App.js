import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import MyRouters from "./routes";
import { Header } from "./components";
import { ModalProvider } from "./components/Modal";

const connectModal = WrapComponent => {
  return props => {
    return (
      <ModalProvider>
        <WrapComponent {...props} />
      </ModalProvider>
    );
  };
};

const App = props => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="main-layout">
        {/* <Loading /> */}
        <header>
          <Header />
        </header>
        <div className="wraper">
          <MyRouters />
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {};

export default connectModal(App);
