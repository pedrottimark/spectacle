import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Quote extends Component {
  render() {
    return (
      <span className={this.props.className} style={[this.context.styles.components.quote, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </span>
    );
  }
}

Quote.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

Quote.contextTypes = {
  styles: PropTypes.object
};
