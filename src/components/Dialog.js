import React from "react";

const Dialog = (props) => {
  return (
    <div className="dialog" onClick={(e) => e.stopPropagation()}>
      <h3 className="header">{props.title}</h3>
      <p className="content">{props.content}</p>
      <div className="action">{props.action}</div>
    </div>
  );
};

export default Dialog;
