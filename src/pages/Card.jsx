import React from "react";

function Card({ data, d }) {
  return (
    <div
      style={{
        height: "300px",
        width: "500px",
        backgroundColor: "red",
        textAlign: "center",
      }}
    >
      <h1>this is card</h1>
      <h2>{data}</h2>
      <br />
      <br />
      <br />
      <button onMouseOver={d}>btn</button>
      <br />
      <br />
      {/* or function callback it use to send data from parameter*/}
      <button onClick={() => d()}>purchesh</button>
    </div>
  );
}

export default Card;
