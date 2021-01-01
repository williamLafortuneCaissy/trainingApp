import React  from "react";
class Refocus extends React.Component {

  componentDidUpdate() {
    if (this.node) {
      this.node.focus();
    }
  }

  render() {
    return <div ref={n => this.node = n} tabIndex={-1}>{this.props.children}</div>;
  }
}

export default Refocus;
