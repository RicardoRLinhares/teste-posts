import { Component } from "react";

import "./style.css";

export class Button extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { text, onClick, disabled } = this.props;
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <button disabled={disabled} className="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}
