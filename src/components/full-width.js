/*global window*/

import React, { Component, PropTypes } from "react";
import Radium from "radium";
import { styleBase, propTypesBase } from "../utils/base";

const styleOuter = (state) => ({
  display: "block",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  width: "100%",
  height: state.height
});

const styleInner = (state) => ({
  display: "block",
  margin: 0,
  padding: 0,
  whiteSpace: "nowrap",
  width: state.width || "auto",
  transform: `scale(${state.scale})`,
  transformOrigin: "left top"
});

@Radium
export default class FullWidth extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.state = {
      height: 16,
      scale: 1
    };
  }
  componentDidMount() {
    this.resize();
    window.addEventListener("load", this.resize);
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.resize);
    window.removeEventListener("resize", this.resize);
  }
  componentWillReceiveProps() {
    this.resize();
  }
  resize() {
    const inner = this.refs.inner;
    const outer = this.refs.outer;
    inner.style.display = "inline-block";
    const width = inner.offsetWidth;
    const scale = outer.offsetWidth / width;
    const height = inner.offsetHeight * scale;
    inner.style.display = "block";
    this.setState({
      width,
      height,
      scale
    });
  }
  render() {
    return (
      <div ref="outer" style={[styleBase(this.props, this.context), this.props.style, styleOuter(this.state)]}>
        <div ref="inner" style={[styleInner(this.state)]}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

FullWidth.propTypes = Object.assign({}, propTypesBase, {
  style: PropTypes.object,
  children: PropTypes.node
});

FullWidth.contextTypes = {
  styles: PropTypes.object
};
