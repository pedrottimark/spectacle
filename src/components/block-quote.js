import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class BlockQuote extends Component {
  render() {
    return (
      <blockquote className={this.props.className} style={[this.context.styles.components.blockquote, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </blockquote>
    );
  }
}

BlockQuote.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

BlockQuote.contextTypes = {
  styles: PropTypes.object
};
