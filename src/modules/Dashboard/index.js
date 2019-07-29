import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators({}, dispatch)
  }
}

const Dashboard = () => {
  return <div className="dashboard">Dashboard</div>;
};

Dashboard.propTypes = {
  actions: PropTypes.shape({})
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
