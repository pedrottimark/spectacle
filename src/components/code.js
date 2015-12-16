import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Code extends Component {
  render() {
    return (
      <code className={this.props.className} style={[this.context.styles.components.code, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </code>
    );
  }
}

Code.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

Code.contextTypes = {
  styles: PropTypes.object
};
