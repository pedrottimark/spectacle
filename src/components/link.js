import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Link extends Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.href} target={this.props.target} style={[this.context.styles.components.link, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
});

Link.contextTypes = {
  styles: PropTypes.object
};
