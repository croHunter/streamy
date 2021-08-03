import React from "react";

const Dialog = (props) => {
  return (
    <div className="dialog" onClick={(e) => e.stopPropagation()}>
      <div className="header">{props.title}</div>
      <div className="content">{props.content}</div>
      <div className="action">{props.action}</div>
    </div>
  );
};

export default Dialog;
