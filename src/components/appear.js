import React, { PropTypes } from "react";
import tweenState from "react-tween-state";
import { connect } from "react-redux";

const Appear = React.createClass({
  mixins: [tweenState.Mixin],
  propTypes: {
    order: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node
  },
  contextTypes: {
    export: PropTypes.bool,
    overview: PropTypes.bool,
    slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  },
  getInitialState() {
    return {
      visible: false,
      opacity: this.context.export || this.context.overview ? 1 : 0
    };
  },
  componentWillReceiveProps({fragment: {fragments}}) {
    const slide = this.context.slide;
    const fragment = this.refs.fragment;
    const id = parseInt(fragment.dataset.fid);
    if (slide in fragments && fragments[slide].hasOwnProperty(id)) {
      this.setState({
        visible: fragments[slide][id].visible
      }, () => {
        let endVal = this.state.visible ? 1 : 0;
        if (this.context.export || this.context.overview) {
          endVal = 1;
        }
        this.tweenState("opacity", {
          easing: tweenState.easingTypes.easeInOutQuad,
          duration: 300,
          endValue: endVal
        });
      });
    }
  },
  render() {
    const { order, style, children } = this.props;
    const styleOpacity = {
      opacity: this.getTweeningValue("opacity")
    };
    return (
      <div data-order={order} style={Object.assign({}, style, styleOpacity)} className="fragment" ref="fragment">
        {children}
      </div>
    );
  }
});

export default connect((state) => state)(Appear);
