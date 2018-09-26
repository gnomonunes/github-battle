import React from "react";

const Loading = (props) => (
  <div style={props.style}>{props.text}</div>
)

Loading.defaultProps = {
  text: 'Loading...',
  style: {color: 'red'}
}

export default Loading;
