import React from "react";

function Container({ children }) {
  return (
    <div>
      <div>Container component</div>
      {children}
    </div>
  );
}

export default Container;
