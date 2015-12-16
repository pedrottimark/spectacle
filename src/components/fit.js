import React, { Component, PropTypes } from "react";
import Radium from "radium";

@Radium
export default class Fit extends Component {
  render() {
    const styleFit = {
      flex: 0
    };
    return (
      <div className={this.props.className} style={[this.props.style, styleFit]}>
        {this.props.children}
      </div>
    );
  }
}

Fit.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};
