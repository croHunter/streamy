import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../google-auth";
import "./Header.scss";
const index = () => {
  return (
    <header className="header">
      <Link to="/" className="heading">
        Streamy
      </Link>
      <Link to="/" className="nav">
        All streams
      </Link>
      <GoogleAuth />
    </header>
  );
};

export default index;
