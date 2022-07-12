import React from "react";

function Item({ location }) {
  //   console.log(props.location.state);
  const { state } = location;
  console.log(state);
  if (!state) {
    window.location = "/";
  }
  return (
    <div>
      <div>{state.title}</div>
      <img src={state.image} />
    </div>
  );
}

export default Item;
