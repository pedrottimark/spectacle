import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class S extends Component {
  render() {
    const { type, style, children } = this.props;
    let styles = {};
    if (type.indexOf("strikethrough") !== -1) {
      styles = Object.assign(styles, {textDecoration: "line-through"});
    }
    if (type.indexOf("underline") !== -1) {
      styles = Object.assign(styles, {textDecoration: "underline"});
    }
    if (type.indexOf("bold") !== -1) {
      styles = Object.assign(styles, {fontWeight: "bold"});
    }
    if (type.indexOf("italic") !== -1) {
      styles = Object.assign(styles, {fontStyle: "italic"});
    }
    return (
      <span className={this.props.className} style={[this.context.styles.components.s[type], styleBase(this.props, this.context), styles, style]}>
        {children}
      </span>
    );
  }
}

S.propTypes = Object.assign({}, propTypesBase, {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
});

S.contextTypes = {
  styles: PropTypes.object
};
