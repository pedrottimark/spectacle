import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Cite extends Component {
  render() {
    return (
      <cite className={this.props.className} style={[this.context.styles.components.cite, styleBase(this.props, this.context), this.props.style]}>
        - {this.props.children}
      </cite>
    );
  }
}

Cite.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

Cite.contextTypes = {
  styles: PropTypes.object
};
