import React from '../../../../node_modules/react';
import './StdButton.scss';

function StdButton(props) {
  return (
    <button className="std-button"> {props.text} </button>
  );
}

export default StdButton;
