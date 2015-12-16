import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class List extends Component {
  render() {
    return (
      <ul className={this.props.className} style={[this.context.styles.components.list, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </ul>
    );
  }
}

List.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

List.contextTypes = {
  styles: PropTypes.object
};
