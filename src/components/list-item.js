import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class ListItem extends Component {
  render() {
    return (
      <li className={this.props.className} style={[this.context.styles.components.listItem, styleBase(this.props, this.context), this.props.style]}>
        {this.props.children}
      </li>
    );
  }
}

ListItem.propTypes = Object.assign({}, propTypesBase, {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
});

ListItem.contextTypes = {
  styles: PropTypes.object
};
