import React from "react";

function Field(props) {
  return (
    <div className="Field" {...props}>
      {props.x ? "x" : props.o ? "o" : ""}
    </div>
  );
}

export default Field;
