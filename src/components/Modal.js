import React from "react";
import { createPortal } from "react-dom";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
  createPortal(
    <div className="modal-container" onClick={props.onDismiss}>
      {props.children}
    </div>,
    document.querySelector("#modal")
  );
