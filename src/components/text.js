import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

@Radium
export default class Text extends Component {
  render() {
    const { lineHeight, fit, style, children } = this.props;
    // TODO: warn about fit
    return (
      <p style={[
          this.context.styles.components.text,
          styleBase(this.props, this.context),
          {
            lineHeight
          },
          style]}>
        {this.props.children}
      </p>
    );
  }
}

Text.defaultProps = {
  lineHeight: 1
};

Text.propTypes = Object.assign({}, propTypesBase, {
  fit: PropTypes.bool,
  lineHeight: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node
});

Text.contextTypes = {
  styles: PropTypes.object
};
