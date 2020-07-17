import React from "react";

const Myname2 = ({ name }) => {
  return (
    <div>
      <h1>This is function props example</h1>
      <h2>My name is {name}</h2>
    </div>
  );
};
Myname2.defaultProps = {
  name: "function name",
};

export default Myname2;
