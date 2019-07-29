import React from "react";
import { Route, withRouter } from "react-router-dom";
import animejs from "animejs";
import PropTypes from "prop-types";

import config from "./config";

const AnimatedSwitch = Page => {
  return props => (
    <div>
      <Page {...props} />
    </div>
  );
};

class Router extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged();
    }
  }

  onRouteChanged = () => {
    animejs({
      targets: "#root-route > div",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 800,
    });
  };

  render() {
    return (
      <div id="root-route">
        {config.map(router => (
          <Route
            key={router.path}
            exact
            path={router.path}
            component={AnimatedSwitch(router.component)}
          />
        ))}
      </div>
    );
  }
}

export default withRouter(Router, { updateOnLocationChange: true });
