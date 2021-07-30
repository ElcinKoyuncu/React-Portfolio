import React from "react";

export function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props}>{props.children}</div>;
}

export function Row(props) {
  return <div className="row justify-content-md-center mt-1" {...props}> {props.children} </div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}