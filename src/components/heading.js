import React, { Component, createElement, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Heading extends Component {
  render() {
    const { size, lineHeight, fit, style, children} = this.props;
    // TODO: warn about fit
    return createElement(`H${size}`, {
      style: [
        this.context.styles.components.heading[`h${size}`],
        styleBase(this.props, this.context),
        {
          lineHeight
        },
        style
      ]
    }, children);
  }
}

Heading.defaultProps = {
  size: 1,
  lineHeight: 1
};

Heading.propTypes = Object.assign({}, propTypesBase, {
  fit: PropTypes.bool,
  lineHeight: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node
});

Heading.contextTypes = {
  styles: PropTypes.object
};
